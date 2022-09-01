import connection from "../database/postgres.js";

async function fightersRepository(winner: string, loser: string, draw: boolean) {

    //Verifica se os usuários existem no banco de dados
    const { rows: winnerDB } = await connection.query(`
        SELECT * FROM fighters 
            WHERE username = $1
    `,[winner]
    );

    const { rows: loserDB } = await connection.query(`
        SELECT * FROM fighters 
            WHERE username = $1
    `,[loser]
    );

    //Lógica se empate
    if(draw) {
        if(winnerDB[0]) {
            await connection.query(`
                UPDATE fighters
                    SET "draws" = "draws" + 1
                WHERE "username" = $1
            `,[winner]);
        } else {
            await connection.query(`
                INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, $2, $3, $4)
            `,[winner, 0, 0, 1]
        );
        }
    
        if(loserDB[0]) {
            await connection.query(`
                UPDATE fighters
                    SET "draws" = "draws" + 1
                WHERE "username" = $1
            `,[loser]);
        } else {
            await connection.query(`
                INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, $2, $3, $4)
            `,[loser, 0, 0, 1]
        );
        }

        return;
    }


    //Logicas de atualização ou criação da linha no banco de dados
    if(winnerDB[0]) {
        await connection.query(`
            UPDATE fighters
                SET "wins" = "wins" + 1
            WHERE "username" = $1
        `,[winner]);
    } else {
        await connection.query(`
            INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, $2, $3, $4)
        `,[winner, 1, 0, 0]
    );
    }

    if(loserDB[0]) {
        await connection.query(`
            UPDATE fighters
                SET "losses" = "losses" + 1
            WHERE "username" = $1
        `,[loser]);
    } else {
        await connection.query(`
            INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, $2, $3, $4)
        `,[loser, 0, 1, 0]
    );
    }


}

export default fightersRepository;