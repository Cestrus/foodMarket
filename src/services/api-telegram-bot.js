export class ApiTelegram{
	constructor(bot_token = '1506880554:AAGmDwBcmmr4ECb_9nlIftCcYHPha6dTMf4', chat_id = '985654935') {
		this.bot_token = bot_token;
		this.url = `https://api.telegram.org/bot${this.bot_token}/sendMessage?chat_id=${chat_id}&text=`;
		this.reducer = null;
	}

	initReducer( reducer ){
		this.reducer = reducer;
	}

	activityReducer( ...args ){
		return this.reducer.activityReducer( ...args );
	}

	sendMessage( text ){
		fetch(this.url + `${text}`).then(res => console.log( res ))
	}

}
