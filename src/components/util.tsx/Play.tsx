
export default function(squares:(undefined | null | "O" | "X")[]=[] ){
    let winnerArrs = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let winnerArr of winnerArrs) {
        let [squareNum1, squareNum2, squareNum3] = winnerArr

        if(squares[squareNum1] === squares[squareNum2] && squares[squareNum2] ===squares[squareNum3]){
            return squares[squareNum1]
    
        }

    return null

    }
}