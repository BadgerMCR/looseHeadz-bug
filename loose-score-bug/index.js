module.exports = {
	name: "score-bug-loose",
	description: "hallftime and full time score",
	category: "Rugby",
	icon: "image",
	hasEntries: true,
	default: {

	},
	entry_props: [

		{
			name: "loosebugTeam1",
			description: "Team 1",
			type: "String"
		},
		{
			name: "loosebugTeam2",
			description: "Team 2",
			type: "String"
		},
		{
			name: "loosebugTeam1Score",
			description: "Team 1 Score",
			type: "Number"
		},
		{
			name: "loosebugTeam2Score",
			description: "Team 2 Score",
			type: "Number"
		},
		{
			name: "loosebugHTFT",
			description: "HT or FT",
			type: "String"
		},
	],
	
	vue_template: getFile("template.html").toString(),
	css: getFile("style.css").toString()
}
