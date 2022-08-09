import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store'
import { getGreeting } from '../redux/store'

export default function Greeting() {
  const msg = useSelector(state => state.greeting)
  const dispatch = useDispatch();

  async function fetchGreeting() {
    await fetch('http://localhost:3000/greeting/index')
            .then(res => res.json())
            .then(data => dispatch(getGreeting(data.text)) )
            .catch( err => console.log(err))
  }
  return (
    <div>
      <h3>Greeting: <small>{ msg }</small></h3>
      <button type='button' onClick={ () => fetchGreeting() } >Get Greetings</button>
    </div>

  )
}
