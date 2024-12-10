class CardApiService {
    async getWords() {
        const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
        const data = await response.json();
        return data;
    }
    
}
export const cardApiService = new CardApiService;
