import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import homePage from '../pages/HomePage';
import itemAddedPage from '../pages/ItemAddedPage';
import itemPage from '../pages/ItemPage';
import shoppingCartPage from '../pages/ShoppingCartPage';
import ItemAddedPage from '../pages/ItemAddedPage';
import conversions from '../../support/util/conversions';

let nameItem, priceItem1, priceItem2, priceConvert1, priceConvert2;
let totalSumConvert;

@binding()

export class ShoppingCartSteps {
    @given(/^I found an item that I want to buy$/)
    public givenFindItemBuy() {
        nameItem = "Celular Apple iPhone 11 Pro 64gb / Tela 5.8'' / 12MP / iOS 13";
        homePage.searchText(nameItem);
        browser.keys('Enter');
    }

    @when(/^I select the item$/)
        public whenSelectItem() {
            const item = homePage.nameFirstResults();
            assert.equal(item, nameItem);
            homePage.nameFirstClick();
    }

    @when(/^I add the item to the shopping cart$/)
    public whenAddItemCart() {
        assert.isTrue(itemPage.isReturnResult());
        priceItem1 = itemPage.priceBoxValue();
        itemPage.addToCartClick();
        const amountItem = itemAddedPage.amountItemValue();
        assert.equal(amountItem, 'Subtotal do carrinho (1 item):');
        const total = itemAddedPage.totalPriceValue();
        assert.equal(total, priceItem1);
        // Convert string to float
        priceConvert1 = conversions.convertStringtoFloat(priceItem1);
    }

    @when(/^I add another item, but with diferent color to the shopping cart$/)
    public whenAddItemDifColorCart() {
        itemAddedPage.itemSelectedClick();
        itemPage.colorThirdClick();
        browser.pause(2500);
        priceItem2 = itemPage.priceBoxValue();
        itemPage.addToCartClick();
        const amountItem = ItemAddedPage.amountItemValue();
        assert.equal(amountItem, 'Subtotal do carrinho (2 itens):')
        let total = itemAddedPage.totalPriceValue();
        // Convert string to float
        priceConvert2 = conversions.convertStringtoFloat(priceItem2);
        totalSumConvert = parseFloat(priceConvert1) + parseFloat(priceConvert2);
        totalSumConvert = conversions.convertCoin(totalSumConvert);
        assert.equal(total, totalSumConvert);
    }

    @then(/^should see the information about the items that I've chosen$/)
    public thenConfirmationData() {
        ItemAddedPage.cartClick();
        const title = shoppingCartPage.titleValue();
        assert.equal(title, 'Carrinho de compras');
        const price2 = shoppingCartPage.priceItemFirstValue();
        assert.equal(price2, priceItem2);
        const price1 = shoppingCartPage.priceItemSecondValue();
        assert.equal(price1, priceItem1);
        const Subtotal = shoppingCartPage.subtotalValue();
        assert.equal(Subtotal, totalSumConvert);
        // Delete item of the cart
        shoppingCartPage.amountSecondClick();
        shoppingCartPage.deleteSecondSelectClick();
        shoppingCartPage.amountFirstClick();
        shoppingCartPage.deleteFirstClick();
    }
}