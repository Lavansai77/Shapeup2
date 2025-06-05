import React, { useState } from "react";
import { Container, Card, Button, ListGroup, Row, Col } from "react-bootstrap";

const NutritionChecker = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Nutrition Plans based on budgets
  const nutritionPlans = {
    500: {
      weightGain: {
        plan: "Weight Gain Budget Plan (₹500)",
        details: [
          "Breakfast: 2 Eggs, 2 slices of Whole Wheat Bread, 1 Glass of Milk",
          "Snack: A handful of Nuts and Fruits",
          "Lunch: Rice, Lentils, Vegetables",
          "Snack: Yogurt with Fruits",
          "Dinner: Chapati with Vegetables, Protein Shake"
        ],
      },
      fatLoss: {
        plan: "Fat Loss Budget Plan (₹500)",
        details: [
          "Breakfast: Oats with Fruits",
          "Snack: Green Tea with a handful of almonds",
          "Lunch: Grilled Chicken Salad with Veggies",
          "Snack: Greek Yogurt",
          "Dinner: Steamed Fish or Tofu with Steamed Vegetables"
        ],
      },
      muscleBuilding: {
        plan: "Muscle Building Budget Plan (₹500)",
        details: [
          "Breakfast: 3 Eggs, 1 Avocado, 1 Glass of Milk",
          "Snack: Protein Shake with Banana",
          "Lunch: Chicken Breast with Brown Rice and Veggies",
          "Snack: Almonds",
          "Dinner: Salmon with Vegetables"
        ],
      },
    },
    1000: {
      weightGain: {
        plan: "Weight Gain Mid-Range Plan (₹1000)",
        details: [
          "Breakfast: Scrambled Eggs, 1 Avocado, 1 Whole Wheat Toast",
          "Snack: Peanut Butter on Toast",
          "Lunch: Chicken Breast, Rice, Mixed Vegetables",
          "Snack: Protein Shake and Banana",
          "Dinner: Grilled Fish with Sweet Potatoes"
        ],
      },
      fatLoss: {
        plan: "Fat Loss Mid-Range Plan (₹1000)",
        details: [
          "Breakfast: Oats, Chia Seeds, and Blueberries",
          "Snack: Greek Yogurt with Almonds",
          "Lunch: Grilled Salmon, Quinoa, and Spinach",
          "Snack: Veggie Hummus",
          "Dinner: Chicken Salad with Olive Oil and Balsamic Vinegar"
        ],
      },
      muscleBuilding: {
        plan: "Muscle Building Mid-Range Plan (₹1000)",
        details: [
          "Breakfast: Protein Shake, Oats, and Blueberries",
          "Snack: Boiled Eggs and Avocados",
          "Lunch: Grilled Chicken, Sweet Potatoes, and Broccoli",
          "Snack: Cottage Cheese with Pineapple",
          "Dinner: Beef with Rice and Vegetables"
        ],
      },
    },
    1500: {
      weightGain: {
        plan: "Weight Gain Premium Plan (₹1500)",
        details: [
          "Breakfast: 4 Eggs, 1 Avocado, 1 Glass of Fresh Juice, Whole Wheat Toast",
          "Snack: Protein Shake with Banana and Peanut Butter",
          "Lunch: Grilled Chicken Breast, Quinoa, Roasted Vegetables",
          "Snack: Protein Bar, Greek Yogurt",
          "Dinner: Grilled Salmon, Sweet Potatoes, and Spinach"
        ],
      },
      fatLoss: {
        plan: "Fat Loss Premium Plan (₹1500)",
        details: [
          "Breakfast: Protein Smoothie with Oats and Berries",
          "Snack: Green Tea with Almonds",
          "Lunch: Grilled Chicken, Mixed Vegetables, and Brown Rice",
          "Snack: Carrot Sticks with Hummus",
          "Dinner: Grilled Tofu with Salad"
        ],
      },
      muscleBuilding: {
        plan: "Muscle Building Premium Plan (₹1500)",
        details: [
          "Breakfast: 3 Eggs, Whole Wheat Toast, Protein Shake",
          "Snack: Cottage Cheese with Berries",
          "Lunch: Chicken Breast, Quinoa, and Steamed Broccoli",
          "Snack: Peanut Butter with Apple",
          "Dinner: Steak with Sweet Potatoes and Green Beans"
        ],
      },
    },
  };

  // Handle plan selection
  const handlePlanSelect = (budget, goal) => {
    setSelectedPlan(nutritionPlans[budget][goal]);
  };

  return (
    <Container className="my-4">
      <h2>Nutrition Checker</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>Select Your Budget and Goal</Card.Header>
            <Card.Body>
              <h5>Select Your Budget (₹500, ₹1000, ₹1500)</h5>
              <div>
                <Button
                  variant="outline-primary"
                  onClick={() => handlePlanSelect(500, "weightGain")}
                >
                  ₹500 - Weight Gain
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handlePlanSelect(500, "fatLoss")}
                >
                  ₹500 - Fat Loss
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handlePlanSelect(500, "muscleBuilding")}
                >
                  ₹500 - Muscle Building
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handlePlanSelect(1000, "weightGain")}
                >
                  ₹1000 - Weight Gain
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handlePlanSelect(1000, "fatLoss")}
                >
                  ₹1000 - Fat Loss
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handlePlanSelect(1000, "muscleBuilding")}
                >
                  ₹1000 - Muscle Building
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handlePlanSelect(1500, "weightGain")}
                >
                  ₹1500 - Weight Gain
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handlePlanSelect(1500, "fatLoss")}
                >
                  ₹1500 - Fat Loss
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handlePlanSelect(1500, "muscleBuilding")}
                >
                  ₹1500 - Muscle Building
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          {selectedPlan ? (
            <Card>
              <Card.Header>{selectedPlan.plan}</Card.Header>
              <Card.Body>
                <h5>Nutrition Plan:</h5>
                <ListGroup variant="flush">
                  {selectedPlan.details.map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          ) : (
            <Card>
              <Card.Header>No Plan Selected</Card.Header>
              <Card.Body>
                <p>Please select a budget and workout goal to see the nutrition plan.</p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default NutritionChecker;
