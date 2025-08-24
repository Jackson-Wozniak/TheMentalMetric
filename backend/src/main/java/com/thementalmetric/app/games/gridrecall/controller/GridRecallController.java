package com.thementalmetric.app.games.gridrecall.controller;

import com.thementalmetric.app.games.gridrecall.dto.GridRecallPerformanceDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/GridRecall")
public class GridRecallController {

    @PostMapping("/evaluate")
    public ResponseEntity<?> evaluateNewPerformance(@RequestBody GridRecallPerformanceDto request){
        return ResponseEntity.ok("Not Implemented");
    }
}
