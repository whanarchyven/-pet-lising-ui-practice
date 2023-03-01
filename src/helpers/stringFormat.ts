export default function stringFormat (num,counter){
    if(counter===undefined) {
        let temp = 1;
        if (Math.ceil(num / 1000) != 0) {
            temp += 1;
            stringFormat(num/1000,temp)
        }
        else{
            return temp;
        }
    }
    else{
        if (Math.ceil(num / 1000) != 0) {
            counter += 1;
            stringFormat(num/1000,counter)
        }
        else{
            return counter;
        }
    }
}