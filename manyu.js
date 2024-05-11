let e = document.getElementById('list')
// no_of_mines = e.value
let mine_loc=[];

function mine_locations(n){
    for (let u = 0; u < document.getElementsByClassName('block').length; u++){
        document.getElementsByClassName('block')[u].style.visibility = 'visible'
        // document.getElementsByClassName('block')[u].style.backgroundColor = 'bisque'
        document.getElementsByClassName('block')[u].classList.remove('bomb')
        document.getElementsByClassName('block')[u].classList.remove('diamond')
    }
    mine_loc=[];
    for( let x=0;x<n;x++){
        r = Math.floor(Math.random()*25)
        if (mine_loc.includes(r)) x-- ;
        else mine_loc.push(r)
    }
    // console.log(mine_loc)
}

function go(a){
    if (mine_loc.includes(a)){
        document.querySelectorAll('.block')[a].classList.add('bomb');
        setTimeout(()=>{
            if(confirm("do you want to play again?")){
                reset()
            }
        },100)
    }
    else{
        document.querySelectorAll('.block')[a].classList.add('diamond');

    }
}
function reset(){
    mine_locations(e.value)
}
function main(){
    reset()
    e.addEventListener('change', (ee)=>{
        reset()
    })

}
main()