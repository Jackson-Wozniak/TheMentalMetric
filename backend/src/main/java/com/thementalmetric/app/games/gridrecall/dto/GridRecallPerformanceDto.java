package com.thementalmetric.app.games.gridrecall.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GridRecallPerformanceDto {
    private int completedLevels;
    private List<GridLevelPerformanceDto> levelPerformance;
    private List<GridButtonAccuracyDto> buttonAccuracy;
}
