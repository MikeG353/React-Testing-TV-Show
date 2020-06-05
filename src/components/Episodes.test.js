import React from 'react'
import { render } from '@testing-library/react'
import Episodes from './Episodes'

export const episodesFixture = {
    data: {
        id:2993,
        url:"http://www.tvmaze.com/shows/2993/stranger-things",
        name:"Stranger Things",
        _embedded:{episodes:[
            {
                id:553946,
                url:"http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
                name:"Chapter One: The Vanishing of Will Byers",
                season:1,
                number:1,
                airdate:"2016-07-15",
                airtime:"",
                airstamp:"2016-07-15T12:00:00+00:00",
                runtime:60,
            },
            {
                id:578663,
                url:"http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
                name:"Chapter Two: The Weirdo on Maple Street",
                season:1,
                number:2,
                airdate:"2016-07-15",
                airtime:"",
                airstamp:"2016-07-15T12:00:00+00:00",
                runtime:60,
            },
        ]}
    }
}

test("Episodes renders with episode list for selectedSeason", () => {
    const { queryAllByTestId, rerender } = render(<Episodes errors="" episodes={[]} />)    
    expect(queryAllByTestId("episode")).toHaveLength(0);
    rerender(<Episodes errors="" episodes={episodesFixture.data._embedded.episodes} />)
    expect(queryAllByTestId("episode")).toHaveLength(2);
})