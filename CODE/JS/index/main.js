//? var
//? class
class Radio{
    radioes_Name = [`القاهرة`,`السعودية`,` الجزائر`,`الأمارات`];
    radioes_Src = [
        `http://n04.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABgtzNJMMAuQxTNcSNWkNUaw`,
        `https://stream.radiojar.com/4wqre23fytzuv`,
        `https://webradio.tda.dz/Coran_64K.mp3`,
        `https://zayedquran.gov.ae/stream.php`,
    ];
    radio = 0;

    // play and pause
    radio_Name_P = document.getElementById(`radio_Name_P`);
    radio_Audio = document.createElement(`audio`);
    play_Pause_Icon = document.getElementById(`play_Pause_Icon`);

    //next and back
    next_Icon = document.getElementById(`next_Icon`);
    back_Icon = document.getElementById(`back_Icon`);
    radio_Is_Play;//for Auto play

    //volume
    range_Volume = document.getElementById(`range_Volume`);

    //speed
    range_Speed = document.getElementById(`range_Speed`);

    constructor(){
        this.radio_Name_Src(this.radio);
        this.play_and_Pause();
        this.next();
        this.back();
        this.volume();
        
    }

    
    radio_Name_Src(radio){
        this.radio_Name_P.innerText = this.radioes_Name[radio];
        this.radio_Audio.src = this.radioes_Src[radio];
    }



    play_and_Pause(){
        this.play_Pause_Icon.addEventListener(`click`,()=>{
            if (this.play_Pause_Icon.alt === `play`) {
                this.radio_Name_Src(this.radio);
                this.play();
                this.radio_Is_Play = true;
            } else if (this.play_Pause_Icon.alt === `pause`) {
               this.pause();
               this.radio_Is_Play = false;
            }
        });  
    }

        play(){
            this.radio_Audio.play();
            this.play_Pause_Icon.src = `../MEDIA/IMAGE/index/main/pause_icon.png`;
            this.play_Pause_Icon.alt = `pause`;
        }

        pause(){
            this.radio_Audio.pause();
            this.play_Pause_Icon.src = `../MEDIA/IMAGE/index/main/play_icon.png`;
            this.play_Pause_Icon.alt = `play`;
        }




    next(){
        this.next_Icon.onclick = ()=>{
            if ((this.radio + 1) < this.radioes_Name.length) {
                this.next_Radio();
                this.next_and_back_Auto_Play();
                this.next_Null();
                this.next_to_back_Null();
            }
        };
    }

        next_Radio(){
            ++this.radio;
            this.radio_Name_Src(this.radio);
        }

        next_Null(){
            if ((this.radio + 1) == this.radioes_Name.length) {
                this.next_Icon.classList.add(`next_back_Icon_Null`);
            }
        }

        next_and_back_Auto_Play(){
            if (this.radio_Is_Play === true) {
                this.play();
            }
        }

        next_to_back_Null(){
            if (this.radio != 0) {
                this.back_Icon.classList.remove(`next_back_Icon_Null`);
            }
        }




    back(){
        this.back_Icon.addEventListener(`click`,()=>{
            if (this.radio != 0) {
                this.back_Radio();
                this.next_and_back_Auto_Play();
                this.back_Null();
                this.back_to_next_Null();
            }
        });
    }
        back_Radio(){
            --this.radio;
            this.radio_Name_Src(this.radio);
        }

        back_Null(){
            if(this.radio == 0){
                this.back_Icon.classList.add(`next_back_Icon_Null`);
            }
        }

        back_to_next_Null(){
            if((this.radio + 1) < this.radioes_Name.length){
                this.next_Icon.classList.remove(`next_back_Icon_Null`);
            }
        }

    
    volume(){
        this.range_Volume.addEventListener(`change`,()=>{
            this.radio_Audio.volume = this.range_Volume.value/100;
        });
    }

}

class Background_Color{
    header = document.getElementById(`header`);

    //buttons
    blue_Button = document.getElementById(`blue_button`);
    pink_Button = document.getElementById(`pink_button`);
    orange_Button = document.getElementById(`orange_button`);
    black_Button = document.getElementById(`black_button`);

    //background_Color_Class
    background_Color_Class1 = [`blue`,`pink`,`orange`,`black`];
    background_Color_Class2 = [`green`,`white`,`red`,`blue`];

    constructor(){
        this.background_Color_Of_LocalStorage();
        this.change_Background_Color();
    }

    background_Color_Of_LocalStorage(){
        if (localStorage.getItem(`background_Color1`) !== null) {
            this.header.classList.add(localStorage.getItem(`background_Color1`));
            document.body.classList.add(localStorage.getItem(`background_Color2`));
        }
    }

    change_Background_Color(){
        this.blue();
        this.pink();
        this.orange();
        this.black();
    }

        blue(){
            this.blue_Button.addEventListener(`click`,()=>{
                this.remove_background_Color_Class(this.background_Color_Class1[0]);
                this.add_background_Color_Class(0);
            });
        }
            remove_background_Color_Class(active_class1){
                for (let i = 0; i < 4; ++i){
                    if (this.background_Color_Class1[i] === active_class1) {
                        continue;
                    }

                    this.header.classList.remove(this.background_Color_Class1[i]);
                    document.body.classList.remove(this.background_Color_Class2[i]);
                }
            }

            add_background_Color_Class(class_Number){
                this.header.classList.add(this.background_Color_Class1[class_Number]);
                document.body.classList.add(this.background_Color_Class2[class_Number]);
                this.add_background_Color_Class_For_LocalStorage(class_Number);
            }

                add_background_Color_Class_For_LocalStorage(class_Number){
                    localStorage.setItem(`background_Color1`,this.background_Color_Class1[class_Number]);
                    localStorage.setItem(`background_Color2`,this.background_Color_Class2[class_Number]);
                }


        pink(){
            this.pink_Button.addEventListener(`click`,()=>{
                this.remove_background_Color_Class(this.background_Color_Class1[1]);
                this.add_background_Color_Class(1);
            });
        }

        orange(){
            this.orange_Button.addEventListener(`click`,()=>{
                this.remove_background_Color_Class(this.background_Color_Class1[2]);
                this.add_background_Color_Class(2);
            });
        }

        black(){
            this.black_Button.addEventListener(`click`,()=>{
                this.remove_background_Color_Class(this.background_Color_Class1[3]);
                this.add_background_Color_Class(3);
            });
        }
  
}



//? function
//? run
let radio = new Radio();
let background_Color = new Background_Color();
