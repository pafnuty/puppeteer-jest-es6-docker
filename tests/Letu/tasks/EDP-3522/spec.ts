import { singlePack, test } from '@actions'
import pages from '@pages'
import { browser } from '@config/jest.settings'

const LetuHeader = pages.letuHeader

singlePack('EDP-3522', () => {
  test('is browser opened', async () => {
    await LetuHeader.open()
  })

  test('is header exists', async () => {
    expect(await LetuHeader.checkIsHeaderExists()).toBeTruthy()
  })

  test('is favorites empty', async () => {
    const wishListText = await LetuHeader.getWishListQuantity()

    expect(wishListText).toEqual('0')
  })

  test('is cart empty', async () => {
    const cartLikText = await LetuHeader.getCartLikQuantity()

    expect(cartLikText).toEqual('0')
  })

  test('is guest user', async () => {
    const loginLikText = await LetuHeader.getLoginLinkText()

    expect(loginLikText).toEqual('Войти')
  })

  test('is browser closed', async () => {
    await browser.close()
  })
})
