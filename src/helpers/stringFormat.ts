export function stringFormat (num:number){
    let resultTemp=num.toString()
    let result=[]
    let index=resultTemp.length-1;
    do {
        result.push(resultTemp[index-2]+resultTemp[index-1]+resultTemp[index])
        index=index-3;
    }
    while (index>2)
    let resultString=resultTemp.slice(0,index)
    let iterations=result.length
    for(let i=0;i<iterations;i++){
        resultString+=' '+result.pop()
    }
    return resultString
}