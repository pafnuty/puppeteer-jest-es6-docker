import { singlePack, test } from '@actions'
import pages from '@pages'
import { browser } from '@config/jest.settings'

const LetuHeader = pages.letuHeader
const Page = pages.rest

const productName = 'BME Гелевые румяна - The reason to smile'

singlePack('EDP-3527', () => {
  test('is browser opened', async () => {
    await LetuHeader.open()
  })

  test('is header exists', async () => {
    expect(await LetuHeader.checkIsHeaderExists()).toBeTruthy()
  })

  test('is search results exists', async () => {
    const searchSuggestions = LetuHeader.selectors.searchSuggestions

    await LetuHeader.getSearchResult(productName)

    const searchResultVisible = await Page.isVisible(searchSuggestions)

    expect(searchResultVisible).toBeTruthy()
  })

  test('is first result page opened', async () => {
    const firstSearchResult = `${LetuHeader.selectors.searchSuggestions} li:first-child a`

    await Page.clickWithResponse(firstSearchResult, true, 'product')

    const h1Text = await Page.getText('h1')

    expect(h1Text).toEqual(productName)
  })

  test('is browser closed', async () => {
    await browser.close()
  })
})
