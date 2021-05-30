function superbowlWin (records){
const superbowlWon = records.find(record => record.result === "W")
    if (superbowlWon) {
        return superbowlWon.year;
    } else {
        return undefined;
    }
}