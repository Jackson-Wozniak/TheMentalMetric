package com.thementalmetric.app.games.game.configuration;

import com.thementalmetric.app.games.game.service.GameService;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

import static com.thementalmetric.app.core.properties.ConfigurationProperties.SAVE_ENTITIES_ON_START;

@Configuration
@AllArgsConstructor
public class GamesConfiguration {
    private final GameService gameService;
    private static final Logger logger = LoggerFactory.getLogger(GamesConfiguration.class);

    @PostConstruct
    public void configureGamesOnStart(){
        if(!SAVE_ENTITIES_ON_START) return;

        long gameCount = gameService.saveGamesOnStart();

        logger.info("Game configuring on startup: {} games in DB", gameCount);
    }
}
