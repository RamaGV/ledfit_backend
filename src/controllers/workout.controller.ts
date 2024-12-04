// export const getWorkouts = async (req: Request, res: Response) => {
//   const { page = 1, limit = 10, search } = req.query;

//   const query = search ? { name: { $regex: search, $options: "i" } } : {};

//   const workouts = await Workout.find(query)
//     .skip((page - 1) * limit)
//     .limit(Number(limit));

//   res.json(workouts);
// };
