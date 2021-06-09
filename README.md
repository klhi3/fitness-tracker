# Fitness Tracker

This workout tracker is with the front end code, Mongo database with a Mongoose schema and handle routes with Express.

## Features

1. To view, create and track daily workouts.
2. To log multiple exercises in a workout on a given day. 
3. To track the name, type, weight, sets, reps, and duration of exercise. 
4. To track my distance traveled if the exercise is a cardio exercise.
5. To help a consumer to reach their fitness goals more quickly when they track their workout progress.

## Criteria

1. To create a new workout or continue with their last workout.
2. To add exercises to the most recent workout plan.
3. To add new exercises to a new workout plan.
4. To view the combined weight of multiple exercises from the past seven workouts on the `stats` page.
5. To view the total duration of each workout from the past seven workouts on the `stats` page.
6. Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), 
the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) 


## Diploy

  using [Cloud MongoDB Atlas](http://cloud.mongodb.com/)

  * [Deploy with Heroku - Fitness Tracker](https://fitness-tracker-klhi3.herokuapp.com/)


