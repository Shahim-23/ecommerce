import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Button, HStack, Image, Progress, Pressable, Spinner, Input } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import apiClient from '../Services/api';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

// Define types for the payload
interface ScoreBreakdown {
  question_id: number;
  user_answer: any; // Adjust this type based on your expected answer format
  correct_answer: any; // Adjust this type based on your expected answer format
  score: number;
  feedback: string;
}

interface Payload {
  exam_id: number;
  user_id: number;
  total_score: number;
  exam_total_marks: number;
  total_questions: number;
  correct_answers: number;
  incorrect_answers: number;
  skipped_answers: number;
  score_breakdown: ScoreBreakdown[];
  feedback: string;
}

type RootStackParamList = {
  TamilTestScreen: undefined;
  ResultBoxScreen: { results: any }; // Update this line to accept results
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'TamilTestScreen'>;

const TamilTestScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [blanksAnswers, setBlanksAnswers] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any[]>([]); // State to store selected answers

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/exams/true/');
      const questionBanks = response.data[0]?.question_banks[0]?.selected_questions || [];
      setQuestions(questionBanks);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOptionSelect = (option: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion?.question_type === 2) { // Multiple choice
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else { // Single choice or True/False
      setSelectedOption(option);
    }
  };

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const answer = {
      questionId: currentQuestion.id,
      answer: currentQuestion.question_type === 2 ? selectedOptions : selectedOption
    };
    
    // Add the current answer to the answers array
    setAnswers([...answers, answer]);

    console.log("Selected Answers: ", answer); // Log the answer when Next is pressed

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setSelectedOptions([]);
    } else {
      handleSubmit(); // Submit answers when reaching the last question
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setSelectedOptions([]);
    }
  };

  const handleBlankChange = (index: number, value: string) => {
    const updatedAnswers = [...blanksAnswers];
    updatedAnswers[index] = value;
    setBlanksAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    console.log("All Selected Answers:", answers);

    // Construct the payload based on the expected structure
    const payload: Payload = {
      exam_id: 1, // Replace with the actual exam ID
      user_id: 123, // Replace with the actual user ID
      total_score: 0, // Initialize total score
      exam_total_marks: 100, // Replace with the actual total marks
      total_questions: questions.length,
      correct_answers: 0, // Initialize correct answers count
      incorrect_answers: 0, // Initialize incorrect answers count
      skipped_answers: 0, // Initialize skipped answers count
      score_breakdown: [], // Initialize score breakdown
      feedback: '' // Initialize feedback
    };

    // Iterate through the answers to construct the score breakdown
    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question) {
        const scoreEntry: ScoreBreakdown = {
          question_id: question.id,
          user_answer: answer.answer,
          correct_answer: question.correct_answer, // Assuming you have the correct answer in the question object
          score: answer.answer === question.correct_answer ? 1 : 0, // Simple scoring logic
          feedback: answer.answer === question.correct_answer ? 'Correct' : 'Incorrect'
        };

        payload.score_breakdown.push(scoreEntry); // Add the score entry to the payload
        payload.total_score += scoreEntry.score; // Update total score
        if (scoreEntry.score === 1) {
          payload.correct_answers += 1; // Increment correct answers count
        } else {
          payload.incorrect_answers += 1; // Increment incorrect answers count
        }
      }
    });

    // Calculate skipped answers
    payload.skipped_answers = questions.length - answers.length;

    try {
      const response = await apiClient.post('http://192.168.1.14:8081/api/exams/attempt/', payload);
      console.log('Submission Response:', response.data);
      navigation.navigate('ResultBoxScreen', { results: response.data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error submitting answers:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  if (loading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="md" />
        <Text>Loading Questions...</Text>
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex] || {};

  return (
    <Box flex={1} safeArea bg="white">
      {/* Header */}
      <Box bg={'#8AB6F7'} minHeight={'170px'} p={'40px'}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="25px" fontWeight="bold" color="white" flex={1}>
            Question {currentQuestionIndex + 1}
          </Text>
          <HStack alignItems="center" space={2}>
            <Box bg=" rgba(230, 242, 234, 0.8)" alignItems="center" justifyContent="center" borderRadius="full">
              <Image source={require('../../../Assets/time.png')} style={{ width: 24, height: 24 }} alt="timer icon" />
            </Box>
            <Text bold fontSize="16px" color="white">20 mins</Text>
          </HStack>
        </HStack>
        <Box mt={3}>
          <Progress colorScheme="blue" value={(currentQuestionIndex +  1) * (100 / questions.length)} />
          <HStack mt={4} justifyContent="flex-end">
            <Text fontSize="md" color="white">
              {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Completed
            </Text>
          </HStack>
        </Box>
      </Box>

      {/* Question and Options View */}
      <Box marginTop={'16'} alignItems="center" justifyContent="center">
        <VStack space={4} width="80%" alignItems="center">
          <Text textAlign="center" fontSize={'lg'} fontWeight={'bold'} w={'100%'} marginBottom={'10'}>
            {currentQuestion.question_text}
          </Text>

          {/* Render Fill-in-the-blank questions */}
          {currentQuestion.question_type === 5 && (
            <VStack space={4} width="60%" mb={20} alignItems="center">
              {currentQuestion.blanks?.map((blank: any, index: number) => (
                <HStack key={index} space={2} alignItems="center">
                  <Input
                    value={blanksAnswers[index] || ''}
                    onChangeText={(value) => handleBlankChange(index, value)}
 placeholder={`Enter answer for blank ${blank.blank_number}`}
                    width="80%"
                    borderRadius="10px"
                  />
                </HStack>
              ))}
            </VStack>
          )}

          {/* Render single Choice Questions */}
          {currentQuestion.question_type === 1 && currentQuestion.choices && (
            <VStack space={6} width="60%" mb={20} alignItems="center">
              {Object.keys(currentQuestion.choices).map((optionKey) => {
                const option = currentQuestion.choices[optionKey];
                return (
                  <Pressable
                    key={optionKey}
                    onPress={() => handleOptionSelect(optionKey)}
                    bg={selectedOption === optionKey ? '#B2DFFC' : '#E7F1FF'}
                    width="100%"
                    height="50px"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="10px"
                  >
                    <Text fontSize="16px" color={selectedOption === optionKey ? '#4A2E8E' : '#6F42C1'}>
                      {option}
                    </Text>
                  </Pressable>
                );
              })}
            </VStack>
          )}

          {/* Render Multiple Choice Questions */}
          {currentQuestion.question_type === 2 && currentQuestion.choices && (
            <VStack space={6} width="60%" mb={20} alignItems="center">
              {Object.keys(currentQuestion.choices).map((optionKey) => {
                const option = currentQuestion.choices[optionKey];
                const isSelected = selectedOptions.includes(optionKey);
                return (
                  <Pressable
                    key={optionKey}
                    onPress={() => handleOptionSelect(optionKey)}
                    bg={isSelected ? '#B2DFFC' : '#E7F1FF'}
                    width="100%"
                    height="50px"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="10px"
                  >
                    <Text fontSize="16px" color={isSelected ? '#4A2E8E' : '#6F42C1'}>
                      {option}
                    </Text>
                  </Pressable>
                );
              })}
            </VStack>
          )}

          {/* Render True/False questions */}
          {currentQuestion.question_type === 4 && (
            <VStack space={6} width="80%" mb={20} alignItems="center" justifyContent={'center'}>
              <VStack space={4} width="60%" justifyContent="center">
                <Pressable
                  onPress={() => handleOptionSelect('True')}
                  bg={selectedOption === 'True' ? '#B2DFFC' : '#E7F1FF'}
                  width="100%"
                  height="50px"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="10px"
                >
                  <Text fontSize="16px" color={selectedOption === 'True' ? '#4A2E8E' : '#6F42C1'}>
                    True
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => handleOptionSelect('False')}
                  bg={selectedOption === 'False' ? '#B2DFFC' : '#E7F1FF'}
                  width="100%"
                  height="50px"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="10px"
                >
                  <Text fontSize="16px" color={selectedOption === 'False' ? '#4A2E8E' : '#6F42C1'}>
                    False
                  </Text>
                </Pressable>
              </VStack>
            </VStack>
          )}
        </VStack>
      </Box>

      {/* Navigation Buttons */}
      <Box alignItems="center" justifyContent="center" mt={10}>
        <HStack space={6}>
          <Button onPress={handlePrev} disabled={currentQuestionIndex === 0}>
            Previous
          </Button>
          <Button onPress={handleNext}>
            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default TamilTestScreen;