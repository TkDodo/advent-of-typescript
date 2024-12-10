enum Gift {
	Coal = 0,
	Train = 1,
	Bicycle = Train * 2,
	SuccessorToTheNintendoSwitch = Bicycle * 2,
	TikTokPremium = SuccessorToTheNintendoSwitch * 2,
	Vape = TikTokPremium * 2,
	Traditional = Train | Bicycle,
	OnTheMove = Coal | TikTokPremium | Vape | Bicycle,
	OnTheCouch = OnTheMove & ~Bicycle | SuccessorToTheNintendoSwitch
};
