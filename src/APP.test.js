import React from 'react'
import {render, waitFor, fireEvent} from '@testing-library/react'
import {fetchShow as mockFetchShow} from "./api/fetchShow"
import App from './App'
import {episodesFixture} from "./components/Episodes.test"
jest.mock("./api/fetchShow")
test("App fetches and reders data", async () => {
    // was never able to get this to work asyncronously, Need additional help here.
    mockFetchShow.mockResolvedValueOnce(episodesFixture)
    console.log("log of fetchshow",mockFetchShow)
    const { findByText, getByText } = render(<App  />)
    const fetchingMessage = getByText(/Fetching data.../i)
    const chapterOne = getByText(/Chapter One:/i)

    expect(fetchingMessage).toBeInTheDocument()


    // await waitFor(() => {
    //     const dropdown = findByText(/select a season/i)
    //     expect(dropdown).toBeInTheDocument()
    //     expect(fetchingMessage).toBeInTheDocument()
    // })
    const dropdown = await findByText(/select a season/i)
        expect(dropdown).toBeInTheDocument()
        fireEvent



})