import axios from 'axios'

const API_URL = 'api/diary/'

// Create new entry
const createEntry = async (diaryData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, diaryData, config)

  return response.data
}

// Get user entries
const getDiary = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteDiary = async (diaryId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + diaryId, config)

  return response.data
}

const diaryService = {
  createEntry,
  getDiary,
  deleteDiary,
}

export default diaryService