// /*
// 	UNIVERSIDAD DEL VALLE DE GUATEMALA
// 	OTHELLO
// 	Diseño WEB
// 	SAÚL CONTRERAS (SUULCODER)

// */
// const root = document.getElementById('root');									//root element from html

// const renderCell = ({															//design for each cell
// 	value,
// 	index,
// 	state
// }) => {
// 	const cell = document.createElement('div')
// 	cell.style.backgroundColor = '#218032'
// 	cell.style.borderColor = 'black'
// 	cell.style.display = 'block'
// 	cell.style.borderStyle = 'solid'
// 	cell.marginTop = '2px'
// 	cell.marginBottom = '2px'
// 	cell.marginRight = '2px'
// 	cell.marginLeft = '2px'
// 	cell.style.width='100%'
// 	cell.style.height='33px'
// 	const piece = document.createElement('button')
// 	piece.style.borderRadius = '100px'
// 	piece.style.width = '100%'
// 	piece.style.height = '100%'
// 	if(value===0){
// 		piece.style.backgroundColor = '#218032'
// 	}
// 	else if(value===1){
// 		piece.style.backgroundColor = 'white'
// 	}
// 	else if(value===-1){
// 		piece.style.backgroundColor = 'black'
// 	}

// 	piece.onclick = () => {														//logic of the game
// 		const { board } = state;
// 		if(value===2){
// 			board[index[0]][index[1]] = (state.turn) ? 1 : -1;					//change color and all rows of the same color
// 			//check all up pieces
// 			let control = 1;
// 			let boolcontrol = (index[0]+control>0 && index[0]+control<8) ? true : false;
// 			let toChange = [];
// 			let doChangeUP = false;
// 			while(boolcontrol && board[index[0]+control][index[1]]!=0 && board[index[0]+control][index[1]]!=2){
// 				if(board[index[0]+control][index[1]]!=board[index[0]][index[1]]){
// 					toChange.push([index[0]+control,index[1],board[index[0]][index[1]]]);	
// 				}
// 				else{
// 					doChangeUP = (toChange.length!=0) ? true : false;
// 					boolcontrol = false;
// 				}
// 				if (index[0]+control+1>=0 && index[0]+control+1<8){
// 					control = control + 1
// 				}
// 				else{
// 					boolcontrol = false;
// 				}
// 			}
// 			if(doChangeUP){
// 				toChange.map((myList)=> board[myList[0]][myList[1]] = myList[2])
// 			}
// 			//check all down pieces
// 			let doChangeDOWN = false;
// 			try{
// 				control = 1;
// 				boolcontrol = (index[0]-control>0 && index[0]-control<8) ? true : false;
// 				toChange = [];
// 				while(boolcontrol && board[index[0]-control][index[1]]!=0 && board[index[0]-control][index[1]]!=2){
// 					if(board[index[0]-control][index[1]]!=board[index[0]][index[1]]){
// 						toChange.push([index[0]-control,index[1],board[index[0]][index[1]]]);	
// 					}
// 					else{
// 						doChangeDOWN = (toChange.length!=0) ? true : false;;
// 						boolcontrol = false;
// 					}
// 					if (index[0]-control+1>=0 && index[0]-control+1<8){
// 						control = control + 1
// 					}
// 					else{
// 						boolcontrol = false;
// 					}
// 				}
// 				if(doChangeDOWN){
// 					toChange.map((myList)=> board[myList[0]][myList[1]] = myList[2])
// 				}	
// 			}
// 			catch{
// 				console.log('done')
// 			}
// 			//check all left pieces
// 			control = 1;
// 			boolcontrol = (index[1]-control>0 && index[1]-control<8) ? true : false;
// 			toChange = [];
// 			let doChangeLeft = false;
// 			while(boolcontrol && board[index[0]][index[1]-control]!=0 && board[index[0]][index[1]-control]!=2){
// 				if(board[index[0]][index[1]-control]!=board[index[0]][index[1]]){
// 					toChange.push([index[0],index[1]-control,board[index[0]][index[1]]]);	
// 				}
// 				else{
// 					doChangeLeft = (toChange.length!=0) ? true : false;;
// 					boolcontrol = false;
// 				}
// 				if (index[1]-control+1>=0 && index[1]-control+1<8){
// 					control = control + 1
// 				}
// 				else{
// 					boolcontrol = false;
// 				}
// 			}
// 			if(doChangeLeft){
// 				toChange.map((myList)=> board[myList[0]][myList[1]] = myList[2])
// 			}
// 			//check all right pieces
// 			control = 1;
// 			boolcontrol = (index[1]+control>0 && index[1]+control<8) ? true : false;
// 			toChange = [];
// 			let doChangeRight = false;
// 			while(boolcontrol && board[index[0]][index[1]+control]!=0 && board[index[0]][index[1]+control]!=2){
// 				if(board[index[0]][index[1]+control]!=board[index[0]][index[1]]){
// 					toChange.push([index[0],index[1]+control,board[index[0]][index[1]]]);	
// 				}
// 				else{
// 					doChangeRight = (toChange.length!=0) ? true : false;;
// 					boolcontrol = false;
// 				}
// 				if (index[1]+control+1>=0 && index[1]+control+1<8){
// 					control = control + 1
// 				}
// 				else{
// 					boolcontrol = false;
// 				}
// 			}
// 			if(doChangeRight){
// 				toChange.map((myList)=> board[myList[0]][myList[1]] = myList[2])
// 			}
// 			//check all down and left pieces //check all down and right pieces
// 			let doChangeDownLeft = false;
// 			let doChangeDownRight = false;
// 			try{
// 				control = 1;
// 				boolcontrol = (index[0]-control>0 && index[0]-control<8 && index[1]-control>0 && index[1]-control<8) ? true : false;
// 				toChange = [];
				
// 				while(boolcontrol && board[index[0]-control][index[1]-control]!=0 && board[index[0]-control][index[1]-control]!=2){
// 					if(board[index[0]-control][index[1]-control]!=board[index[0]][index[1]]){
// 						toChange.push([index[0]-control,index[1]-control,board[index[0]][index[1]]]);	
// 					}
// 					else{
// 						doChangeDownLeft = (toChange.length!=0) ? true : false;;
// 						boolcontrol = false;
// 					}
// 					if (index[0]-control+1>=0 && index[0]-control+1<8 && index[1]-control>0 && index[1]-control<8){
// 						control = control + 1
// 					}
// 					else{
// 						boolcontrol = false;
// 					}
// 				}
// 				if(doChangeDownLeft){
// 					toChange.map((myList)=> board[myList[0]][myList[1]] = myList[2])
// 				}
				
// 				control = 1;
// 				boolcontrol = (index[0]-control>0 && index[0]-control<8 && index[1]+control>0 && index[1]+control<8) ? true : false;
// 				toChange = [];
				
// 				while(boolcontrol && board[index[0]-control][index[1]+control]!=0 && board[index[0]-control][index[1]+control]!=2){
// 					if(board[index[0]-control][index[1]+control]!=board[index[0]][index[1]]){
// 						toChange.push([index[0]-control,index[1]+control,board[index[0]][index[1]]]);	
// 					}
// 					else{
// 						doChangeDownRight = (toChange.length!=0) ? true : false;;
// 						boolcontrol = false;
// 					}
// 					if (index[0]-control+1>=0 && index[0]-control+1<8 && index[1]+control>0 && index[1]+control<8){
// 						control = control + 1
// 					}
// 					else{
// 						boolcontrol = false;
// 					}
// 				}
// 				if(doChangeDownRight){
// 					toChange.map((myList)=> board[myList[0]][myList[1]] = myList[2])
// 				}	
// 			}
// 			catch{
// 				console.log("done")
// 			}
// 			//check all up and right pieces
// 			control = 1;
// 			boolcontrol = (index[0]+control>0 && index[0]+control<8 && index[1]+control>0 && index[1]+control<8) ? true : false;
// 			toChange = [];
// 			let doChangeUpRight = false;
// 			while(boolcontrol && board[index[0]+control][index[1]+control]!=0 && board[index[0]+control][index[1]+control]!=2){
// 				if(board[index[0]+control][index[1]+control]!=board[index[0]][index[1]]){
// 					toChange.push([index[0]+control,index[1]+control,board[index[0]][index[1]]]);	
// 				}
// 				else{
// 					doChangeUpRight = (toChange.length!=0) ? true : false;;
// 					boolcontrol = false;
// 				}
// 				if (index[0]+control+1>=0 && index[0]+control+1<8 && index[1]+control>0 && index[1]+control<8){
// 					control = control + 1
// 				}
// 				else{
// 					boolcontrol = false;
// 				}
// 			}
// 			if(doChangeUpRight){
// 				toChange.map((myList)=> board[myList[0]][myList[1]] = myList[2])
// 			}
// 			//check all up and left pieces
// 			control = 1;
// 			boolcontrol = (index[0]+control>0 && index[0]+control<8 && index[1]-control>0 && index[1]-control<8) ? true : false;
// 			toChange = [];
// 			let doChangeUpLeft = false;
// 			while(boolcontrol && board[index[0]+control][index[1]-control]!=0 && board[index[0]+control][index[1]-control]!=2){
// 				if(board[index[0]+control][index[1]-control]!=board[index[0]][index[1]]){
// 					toChange.push([index[0]+control,index[1]-control,board[index[0]][index[1]]]);	
// 				}
// 				else{
// 					doChangeUpLeft = (toChange.length!=0) ? true : false;;
// 					boolcontrol = false;
// 				}
// 				if (index[0]+control+1>=0 && index[0]+control+1<8 && index[1]-control>0 && index[1]-control<8){
// 					control = control + 1
// 				}
// 				else{
// 					boolcontrol = false;
// 				}
// 			}
// 			if(doChangeUpLeft){
// 				toChange.map((myList)=> board[myList[0]][myList[1]] = myList[2])
// 			}

// 			const doChange = doChangeRight || doChangeLeft || doChangeDOWN || doChangeUP || doChangeUpLeft || doChangeUpRight || doChangeDownRight || doChangeDownLeft;
// 			if(doChange){
// 				board[index[0]][index[1]] = (state.turn) ? 1 : -1;					//change color and all rows of the same color
// 				//change turn and count pieces in the table
// 				state.turn = !state.turn;
// 				//allow following cells to be used so turn their value to 2s
// 				if(index[0]+1>=0 && index[0]+1<8){
// 					board[index[0]+1][index[1]] = (board[index[0]+1][index[1]]==0 && board[index[0]+1][index[1]]!=1 && board[index[0]+1][index[1]]!=-1) ? 2 : board[index[0]+1][index[1]];
// 				}				
// 				if(index[0]-1>=0 && index[0]-1<8){
// 					board[index[0]-1][index[1]] = (board[index[0]-1][index[1]]==0 && board[index[0]-1][index[1]]!=1 && board[index[0]-1][index[1]]!=-1) ? 2 : board[index[0]-1][index[1]];	
// 				}
// 				if(index[1]+1>=0 && index[1]+1<8){
// 					board[index[0]][index[1]+1] = (board[index[0]][index[1]+1]==0 && board[index[0]][index[1]+1]!=1 && board[index[0]][index[1]+1]!=-1) ? 2 : board[index[0]][index[1]+1];	
// 				}
// 				if(index[1]-1>=0 && index[1]-1<8){
// 					board[index[0]][index[1]-1] = (board[index[0]][index[1]-1]==0 && board[index[0]][index[1]-1]!=1 && board[index[0]][index[1]-1]!=-1) ? 2 : board[index[0]][index[1]-1];	
// 				}
// 				if(index[0]+1>=0 && index[0]+1<8 && index[1]+1>=0 && index[1]+1<8){
// 					board[index[0]+1][index[1]+1] = (board[index[0]+1][index[1]+1]==0 && board[index[0]+1][index[1]+1]!=1 && board[index[0]+1][index[1]+1]!=-1) ? 2 : board[index[0]+1][index[1]+1];
// 				}				
// 				if(index[0]+1>=0 && index[0]+1<8 && index[1]-1>=0 && index[1]-1<8){
// 					board[index[0]+1][index[1]-1] = (board[index[0]+1][index[1]-1]==0 && board[index[0]+1][index[1]-1]!=1 && board[index[0]+1][index[1]-1]!=-1) ? 2 : board[index[0]+1][index[1]-1];
// 				}
// 				if(index[0]-1>=0 && index[0]-1<8 && index[1]-1>=0 && index[1]-1<8){
// 					board[index[0]-1][index[1]-1] = (board[index[0]-1][index[1]-1]==0 && board[index[0]-1][index[1]-1]!=1 && board[index[0]-1][index[1]-1]!=-1) ? 2 : board[index[0]-1][index[1]-1];
// 				}
// 				if(index[0]-1>=0 && index[0]-1<8 && index[1]-1>=0 && index[1]+1<8){
// 					board[index[0]-1][index[1]+1] = (board[index[0]-1][index[1]+1]==0 && board[index[0]-1][index[1]+1]!=1 && board[index[0]-1][index[1]+1]!=-1) ? 2 : board[index[0]-1][index[1]+1];
// 				}
// 			}
// 			else{
// 				board[index[0]][index[1]] = 2;
// 				alert("INVALID MOVE")
// 			}
// 			let whites = 0;
// 			let blacks = 0;
// 			let end_of_game = 0;
// 			board.map((row,irow) => {
// 				row.map((column,icolumn) => {
// 					if(column==1){
// 						whites = whites + 1;
// 					}
// 					else if(column==-1){
// 						blacks = blacks + 1;
// 					}
// 					else if(column==2){
// 						end_of_game = end_of_game + 1;
// 					}
// 				})
// 			})
// 			let message = '';
// 			if(end_of_game==0){
// 				if(whites!=blacks){                                                                     //DRAWS
// 					message = (whites>blacks) ? 'WHTE HAS WON' : 'BLACK HAS WON'						//Message for show winner	
// 				}
// 				else{
// 					message = "IT'S A DRAW"
// 				}
// 				state = {
// 					turn: true,
// 					board: [[0,0,0,0,0,0,0,0],
// 							[0,0,0,0,0,0,0,0],
// 							[0,0,0,2,2,0,0,0],
// 							[0,0,2,1,-1,2,0,0],
// 							[0,0,2,-1,1,2,0,0],
// 							[0,0,0,2,2,0,0,0],
// 							[0,0,0,0,0,0,0,0],
// 							[0,0,0,0,0,0,0,0]
// 						]
// 				};
// 				alert(message)//alert who won the game
// 			}
// 			root.innerHTML = '';
//         	render(root, state);//Restart the game
// 		}
// 		else{
// 			alert("INVALID MOVE")
// 		}
// 	};
// 	cell.appendChild(piece)
// 	return cell
// }

// const render = (root, state) =>{															//Design of the page
// 	const header = document.createElement('div');
// 	header.style.backgroundColor='black';
// 	header.style.minWidth = '330px';
// 	header.style.height = '175px';
// 	header.style.display = 'flex';
// 	header.style.flexDirection = 'column'
// 	header.style.justifyContent = 'center';
// 	header.style.alignItems = 'center';
// 	header.style.overflow = 'auto';

// 	const header_tittle = document.createElement('h1');
// 	const tittle_textNode = document.createTextNode('OTHELLO')
// 	header_tittle.appendChild(tittle_textNode)
// 	header_tittle.style.backgroundColor = 'black'
// 	header_tittle.style.color = 'white'
// 	header_tittle.style.fontSize = '45px';
// 	header.appendChild(header_tittle)

// 	const author = document.createElement('h1');
// 	const author_textNode = document.createTextNode('Made by: SUULCODER')
// 	author.appendChild(author_textNode)
// 	author.style.backgroundColor = 'black'
// 	author.style.color = 'white'
// 	author.style.fontSize = '10px';
// 	author.style.marginBottom = '15px';
// 	header.appendChild(author)

// 	const body = document.createElement('div');
// 	body.style.backgroundColor = 'black'
// 	body.style.minWidth = '330px';
// 	body.style.height = '100%'
// 	body.style.display = 'flex';
// 	header.style.flexDirection = 'column'
// 	body.style.justifyContent = 'center';

// 	const board = document.createElement('div');
// 	board.style.backgroundColor = 'green'
// 	board.style.width = '295px';
// 	board.style.height = '312px';
// 	board.style.marginTop = '91px';
// 	board.style.overflow = 'auto'

// 	const currentState = document.createElement('div');
// 	const curr_h1 = document.createElement('h1')
// 	const curr_circle = document.createElement('div')
// 	const turn = (state.turn) ? 'white' : 'black'
// 	const currentState_textNode = document.createTextNode('turn: ' + turn)
// 	currentState.style.display = 'flex'
// 	currentState.style.minWidth = '330px';
// 	curr_h1.appendChild(currentState_textNode)
// 	currentState.style.backgroundColor = '#218032'
// 	currentState.style.justifyContent = 'center'
// 	currentState.style.color = 'white'
// 	curr_h1.style.fontSize = '20px';
// 	curr_circle.style.backgroundColor = turn;
// 	curr_circle.style.borderRadius = '100px';
// 	curr_circle.style.height = '15px'
// 	curr_circle.style.width = '15px'
// 	curr_circle.style.padding = '7px'
// 	curr_circle.style.marginLeft = '10px'
// 	curr_circle.style.marginTop = '10px'
// 	currentState.appendChild(curr_h1)
// 	currentState.appendChild(curr_circle)

// 	let whites = 0;
// 	let blacks = 0;
// 	state.board.map((row,irow) => {
// 		row.map((column,icolumn) => {
// 			if(column==1){
// 				whites = whites + 1;
// 			}
// 			else if(column==-1){
// 				blacks = blacks + 1;
// 			}
// 		})
// 	})

// 	const currentwinner = document.createElement('div');
// 	const curr_whites = document.createElement('h1')
// 	const curr_blacks = document.createElement('h1')
// 	const white_circle = document.createElement('div')
// 	const black_circle = document.createElement('div')
// 	const white_textNode = document.createTextNode(whites)
// 	const black_textNode = document.createTextNode(blacks)
// 	currentwinner.style.display = 'flex'
// 	currentwinner.style.marginTop = '2px';
// 	currentwinner.style.minWidth = '330px';
// 	curr_whites.appendChild(white_textNode)
// 	curr_blacks.appendChild(black_textNode)
// 	currentwinner.style.backgroundColor = '#218032'
// 	currentwinner.style.justifyContent = 'center'
// 	currentwinner.style.color = 'white'
// 	curr_whites.style.fontSize = '12px';
// 	curr_blacks.style.fontSize = '12px';
// 	white_circle.style.backgroundColor = 'white';
// 	black_circle.style.backgroundColor = 'black';
// 	white_circle.style.borderRadius = '100px';
// 	black_circle.style.borderRadius = '100px';
// 	white_circle.style.height = '5px'
// 	white_circle.style.width = '5px'
// 	white_circle.style.padding = '7px'
// 	white_circle.style.marginLeft = '10px'
// 	white_circle.style.marginRight = '10px'
// 	white_circle.style.marginTop = '7px'
// 	black_circle.style.height = '5px'
// 	black_circle.style.width = '5px'
// 	black_circle.style.padding = '7px'
// 	black_circle.style.marginLeft = '10px'
// 	black_circle.style.marginRight = '10px'
// 	black_circle.style.marginTop = '7px'
// 	currentwinner.appendChild(white_circle)
// 	currentwinner.appendChild(curr_whites)
// 	currentwinner.appendChild(black_circle)
// 	currentwinner.appendChild(curr_blacks)

// 	state.board.map((row, irow) =>
// 		row.map((column,icolumn) => renderCell({
// 			value: column,
// 			index: [irow,icolumn],
// 			state: state
// 		}))).map(my_row =>{	
// 			const curr_row = document.createElement('div')
// 			curr_row.style.display = 'flex'
// 			my_row.forEach(
// 				cell => curr_row.appendChild(cell),
// 			)
// 			board.appendChild(curr_row)
// 	});

// 	body.appendChild(board);
// 	root.appendChild(header);
// 	root.appendChild(currentState);
// 	root.appendChild(currentwinner);
// 	root.appendChild(body);
// };


// const state = {								//State of the game. 
// 	turn: true,
// 	board: [[0,0,0,0,0,0,0,0],
// 			[0,0,0,0,0,0,0,0],
// 			[0,0,0,2,2,0,0,0],
// 			[0,0,2,1,-1,2,0,0],
// 			[0,0,2,-1,1,2,0,0],
// 			[0,0,0,2,2,0,0,0],
// 			[0,0,0,0,0,0,0,0],
// 			[0,0,0,0,0,0,0,0]
// 		]
// };
// render(root,state);