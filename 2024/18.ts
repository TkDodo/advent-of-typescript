const createStreetLight = <Color extends string>(
  colors: Array<Color>,
  defaultColor: NoInfer<Color>
) => {
	console.log(colors);
	return defaultColor;
};
