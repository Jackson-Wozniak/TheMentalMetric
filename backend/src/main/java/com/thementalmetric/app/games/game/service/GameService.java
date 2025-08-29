package com.thementalmetric.app.games.game.service;

import com.thementalmetric.app.games.game.entity.Game;
import com.thementalmetric.app.games.game.enums.GameName;
import com.thementalmetric.app.games.game.repository.GameRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@AllArgsConstructor
public class GameService {
    private final GameRepository gameRepository;

    @Transactional
    public long saveGamesOnStart(){
        List<GameName> existingGames = gameRepository.findAll().stream()
                .map(Game::getName).toList();

        List<Game> absentGames = Arrays.stream(GameName.values())
                .filter(existingGames::contains)
                .map(Game::new)
                .toList();
        gameRepository.saveAll(absentGames);

        return gameRepository.count();
    }
}
