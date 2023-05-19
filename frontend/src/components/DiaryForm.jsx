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
            name='name_of_wine'
            id='name_of_wine'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type='text'
            name='vintage'
            id='vintage
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            name="price"
            id="price'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
           <input
            type='text'
            name='place_of_purchase'
            id='place_of_purchase'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type='text'
            name='primary_aromas'
            id='primary_aromas'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type='text'
            name='secondary_aromas'
            id='secondary_aromas'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type='text'
            name='tertiary_aromas'
            id='tertiary_aromas'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type='text'
            name='description'
            id='description'
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