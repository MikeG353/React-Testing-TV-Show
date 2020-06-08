import React from 'react'
import {render, waitFor, fireEvent} from '@testing-library/react'
import {fetchShow as mockFetchShow} from "./api/fetchShow"
import App from './App'
import {episodesFixture} from "./components/Episodes.test"
jest.mock("./api/fetchShow")
test("App fetches and reders data", async () => {
    // was never able to get this to work asyncronously, Need additional help here.
    mockFetchShow.mockResolvedValueOnce(episodesFixture)
    console.log(mockFetchShow)
    const { findByText, getByText } = render(<App  />)
    const fetchingMessage = getByText(/Fetching data.../i)

    await waitFor(() => {
        const dropdown = findByText(/select a season/i)
        
    })

})