import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEntry } from '../features/diary/diarySlice'

function DiaryForm() {

  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createEntry({ text }))
    setText('')

  }

  return  (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Diary</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Notes
          </button>
        </div>
      </form>
    </section>
  )
}

export default DiaryForm