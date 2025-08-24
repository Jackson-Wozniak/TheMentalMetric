import type { GridRecallPerformance, GridLevelPerformance, GridButtonAccuracy } from "../types/GridRecall/GridRecall";
import type { GridRecallPerformanceReport } from "../types/GridRecall/GridRecallDto";


export async function fetchEvalulateGridPerformance(results: GridRecallPerformance){
    const response = await fetch("http://localhost:8080/api/v1/GridRecall/evaluate", {
        method: "POST",
        body: JSON.stringify(results)
    })

    const json = await response.json();

    const data: GridRecallPerformanceReport = { };
    return data;
}