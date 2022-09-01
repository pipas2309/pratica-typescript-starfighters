import axios from "axios";
import fightersRepository from "../repositories/fightersRepository.js";

async function battleService(firstUser: string, secondUser: string) {

    let { data: firstUserRepo } = await axios.get(`https://api.github.com/users/${firstUser}/repos`);
    let { data: secondUserRepo } = await axios.get(`https://api.github.com/users/${secondUser}/repos`);

    let firstUserStars = 0;
    let secondUserStars = 0;

    for(let i = 0; i < firstUserRepo.length; i++) {
        firstUserStars += firstUserRepo[i].stargazers_count;
    }
    for(let i = 0; i < secondUserRepo.length; i++) {
        secondUserStars += secondUserRepo[i].stargazers_count;
    }

    const draw: boolean = firstUserStars === secondUserStars;
    const winner: string = firstUserStars > secondUserStars ? firstUser : secondUser;
    const loser: string = firstUserStars > secondUserStars ? secondUser : firstUser;

    fightersRepository(winner, loser, draw);

    return {
        winner: draw ? null : winner,
        loser: draw ? null : loser,
        draw
    }
}

export default battleService;