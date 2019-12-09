class RockPaperScissors
{
    constructor()
    {
        this.player1Side = document.querySelector("#p1Side");
        this.player2Side = document.querySelector("#p2Side");
        this.player1DisplayScore = document.querySelector("#p1Score");
        this.player2DisplayScore = document.querySelector("#p2Score");
        this.player1Symbol = document.querySelector("#p1Symbol");
        this.player2Symbol = document.querySelector("#p2Symbol");
        this.WinnerMessage = document.querySelector("#WinnerMessage");
        this.WinnerDisplay = document.querySelector("#WinnerDisplay");
        this.endGame = Number(document.querySelector("select").value);
        this.symbols = ["rock.PNG", "paper.PNG", "scissors.PNG"];
        this.player1Score = 0;
        this.player2Score = 0;
        let selectBtn = document.querySelector("select");
        let resetBtn = document.querySelector("#resetBtn");
        let dropBtn = document.querySelector("#drop");

        selectBtn.addEventListener("change", this.reset.bind(this));

        dropBtn.addEventListener("click", function(){

            if (dropBtn.dataset.in_animation == "yes") 
            {
                return; 
            }
            else
            {
                dropBtn.dataset.in_animation = "yes";
                this.playersChooseSymbols();
            }
        }.bind(this));

        resetBtn.addEventListener("click", this.reset.bind(this));
    }

    randomSymbol()
    {
        let index = Math.floor(Math.random() * this.symbols.length);    
            
        return this.symbols[index];
    }

    //_______________________________________________________________________Rand symbol for each player

    playersChooseSymbols()
    {        
        if((this.player1Score < this.endGame) && (this.player2Score < this.endGame))
        {
            let Symbol1 = this.randomSymbol();
            let Symbol2 = this.randomSymbol();

            this.player1Symbol.setAttribute("src", Symbol1);
            this.player2Symbol.setAttribute("src", Symbol2);
            this.player1Side.classList.add("showSymbol1");
            this.player2Side.classList.add("showSymbol2");            
            
            this.stratGame();
            
            if((this.player1Score != (this.endGame)) && (this.player2Score != (this.endGame)))
            {
                setTimeout(function(){
    
                    this.player1Symbol.removeAttribute("src");
                    this.player2Symbol.removeAttribute("src");
                    this.player1Side.classList.remove("showSymbol1");
                    this.player2Side.classList.remove("showSymbol2");
                    document.querySelector("#drop").dataset.in_animation = "no";
    
                }.bind(this), 800);
    
            }
        }
        
        if((this.player1Score == this.endGame) || (this.player2Score == this.endGame))
        {
            this.checkWhoWin();
        }
    }

    //_______________________________________________________________________Reset the game

    reset()
    {
        this.player1DisplayScore.textContent = 0;
        this.player2DisplayScore.textContent = 0;
        this.player1Symbol.removeAttribute("src");
        this.player2Symbol.removeAttribute("src");
        this.player1Side.classList.remove("showSymbol1");
        this.player2Side.classList.remove("showSymbol2");
        this.WinnerDisplay.classList.remove("showWinner");
        this.player1Score = 0;
        this.player2Score = 0;
        this.endGame = Number(document.querySelector("select").value);
        document.querySelector("#drop").dataset.in_animation = "no";   
    }

    //_______________________________________________________________________Start the game

    stratGame()
    {
        let player1ImgSrc = this.player1Symbol.getAttribute("src");
        let player2ImgSrc = this.player2Symbol.getAttribute("src");

        if(player1ImgSrc == "rock.PNG" && player2ImgSrc == "paper.PNG")
        {
            this.player2Score++;
            this.player2DisplayScore.textContent = this.player2Score;
        }
        else if(player2ImgSrc == "rock.PNG" && player1ImgSrc == "paper.PNG")
        {
            this.player1Score++;
            this.player1DisplayScore.textContent = this.player1Score;
        }
        else if(player1ImgSrc == "rock.PNG" && player2ImgSrc == "scissors.PNG")
        {
            this.player1Score++;
            this.player1DisplayScore.textContent = this.player1Score;
        }
        else if(player2ImgSrc == "rock.PNG" && player1ImgSrc == "scissors.PNG")
        {
            this.player2Score++;
            this.player2DisplayScore.textContent = this.player2Score;
        }
        else if(player1ImgSrc == "paper.PNG" && player2ImgSrc == "scissors.PNG")
        {
            this.player2Score++;
            this.player2DisplayScore.textContent = this.player2Score;
        }
        else if(player2ImgSrc == "paper.PNG" && player1ImgSrc == "scissors.PNG")
        {
            this.player1Score++;
            this.player1DisplayScore.textContent = this.player1Score;
        }
    }

    //_______________________________________________________________________Check if win

    checkWhoWin()
    {
        if(this.player1Score > this.player2Score)
        {            
            this.WinnerMessage.textContent = "THE WINNER IS PLAYER 1 !!!";
            this.WinnerDisplay.classList.add("showWinner");
        }
        else
        {
            this.WinnerMessage.textContent = "THE WINNER IS PLAYER 2 !!!";
            this.WinnerDisplay.classList.add("showWinner");
        }
    }
}

new RockPaperScissors();