import Reacr from 'react'
import {render} from '@testing-library/react'
import {fetchShow as mockFetchShow} from "./api/fetchShow"
import { App } from './App'
import {episodesFixture} from "./components/Episodes.test"
jest.mock("./api/fetchShow")
test("App fetches and reders data", () => {
    mockFetchShow.mockResolvedValueOnce(episodesFixture)

    render(<App />)
})