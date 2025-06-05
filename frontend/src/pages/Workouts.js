import React, { useState, useEffect } from "react";
import { Container, Card, ListGroup, Button, Row, Col, Badge, ProgressBar } from "react-bootstrap";

const Workouts = () => {
  // Static workout data
  const workoutData = [
    {
      name: "Push-Up",
      type: "Strength",
      description: "A basic bodyweight exercise that targets your chest, shoulders, and triceps.",
      difficulty: "Beginner",
    },
    {
      name: "Squats",
      type: "Strength",
      description: "A lower body exercise that primarily targets your quads, hamstrings, and glutes.",
      difficulty: "Beginner",
    },
    {
      name: "Plank",
      type: "Core",
      description: "A core strengthening exercise that engages your abs, back, and shoulders.",
      difficulty: "Intermediate",
    },
    {
      name: "Jumping Jacks",
      type: "Cardio",
      description: "A cardiovascular exercise that helps to improve overall fitness and burn calories.",
      difficulty: "Beginner",
    },
    {
      name: "Burpees",
      type: "Cardio",
      description: "A full-body exercise that targets multiple muscle groups and improves endurance.",
      difficulty: "Advanced",
    },
  ];

  // State to track selected workout
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
  const [timer, setTimer] = useState(0); // Timer state to track workout time
  const [intervalId, setIntervalId] = useState(null); // Store the interval ID to clear later

  // Handle workout click
  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
    setIsWorkoutStarted(false); // Reset workout state when a new workout is clicked
    setTimer(0); // Reset the timer
  };

  // Start the workout (trigger a timer)
  const startWorkout = () => {
    setIsWorkoutStarted(true);
    // Start a timer
    const id = setInterval(() => {
      setTimer((prevTime) => prevTime + 1); // Increment timer by 1 second
    }, 1000);

    setIntervalId(id); // Store the interval ID
  };

  // Stop the workout
  const stopWorkout = () => {
    clearInterval(intervalId); // Stop the timer
    setIsWorkoutStarted(false);
    setTimer(0); // Reset timer to 0
  };

  // Cleanup interval when the component is unmounted or the workout is stopped
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <Container className="my-4">
      <h2>Workouts</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>Workout List</Card.Header>
            <ListGroup variant="flush">
              {workoutData.map((workout, index) => (
                <ListGroup.Item
                  key={index}
                  onClick={() => handleWorkoutClick(workout)}
                  style={{ cursor: "pointer" }}
                >
                  <h5>{workout.name}</h5>
                  <Badge bg="info">{workout.type}</Badge>
                  <p>{workout.difficulty}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        <Col md={6}>
          {selectedWorkout ? (
            <Card>
              <Card.Header>{selectedWorkout.name} Details</Card.Header>
              <Card.Body>
                <h5>{selectedWorkout.name}</h5>
                <p><strong>Type:</strong> {selectedWorkout.type}</p>
                <p><strong>Description:</strong> {selectedWorkout.description}</p>
                <p><strong>Difficulty:</strong> {selectedWorkout.difficulty}</p>

                {/* Show workout status and timer */}
                {isWorkoutStarted ? (
                  <>
                    <Card.Text>Workout in Progress: {selectedWorkout.name}</Card.Text>
                    <ProgressBar now={(timer % 60) * 100 / 60} label={`${timer}s`} />
                    <Button variant="danger" onClick={stopWorkout} className="mt-2">
                      Stop Workout
                    </Button>
                  </>
                ) : (
                  <Button variant="primary" onClick={startWorkout}>
                    Start Workout
                  </Button>
                )}
              </Card.Body>
            </Card>
          ) : (
            <Card>
              <Card.Header>Select a workout to view details</Card.Header>
              <Card.Body>
                <p>Click on a workout from the list to see more information and start your workout.</p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Button variant="primary" onClick={() => setSelectedWorkout(null)}>
            Clear Selection
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Workouts;
