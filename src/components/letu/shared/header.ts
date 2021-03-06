import Rest from '@classes/util/rest'

const selectors = {
  container: '#header',
  cartLink: '.LETUR-CartLink',
  wishList: '.LETUR-WishlistLink',
  loginLink: '.LETUR-LoginLink',
  searchInput: 'input[name="Ntt"]',
  searchSuggestions: '.search-result__rightcol ul.ui-menu',
}

export default class LetuHeader extends Rest {
  selectors: any

  constructor() {
    super()
    this.selectors = selectors
  }

  async checkIsHeaderExists() {
    return super.waitFor(this.selectors.container)
  }

  async getWishListQuantity() {
    await super.waitFor(this.selectors.wishList)

    return super.getText(`${this.selectors.wishList} em`)
  }

  async getCartLikQuantity() {
    await super.waitFor(this.selectors.cartLink)

    return super.getText(`${this.selectors.cartLink} em`)
  }

  async getLoginLinkText() {
    await super.waitFor(this.selectors.loginLink)

    return super.getText(this.selectors.loginLink)
  }

  async getSearchResult(text: string) {
    await super.type(this.selectors.searchInput, text)
    return super.waitForResponseURLToContain('resultslist-data')
  }
}
