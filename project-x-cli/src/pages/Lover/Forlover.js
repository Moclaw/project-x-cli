import React from 'react'
import { useParams } from 'react-router-dom'

function Forlover() {
let name = useParams();
  return (
  <>
	<div>
	  <h1>Tui iu bạn đó chính bạn :))<br/>{name.name} </h1>
	  <h2>Chúc bạn luôn vui vẻ và hạnh phúc {decode}</h2>
	</div>
  </>
  )
}

export default Forlover