<template>
  <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="9PDK9RWFNZLMQ" />
    <table class="mx-auto">
      <tr class="selectsize">
        <td>
          <input type="hidden" name="on0" value="Select Size" />Select Size
        </td>
      </tr>
      <tr>
        <td class="pb-5">
          <v-icon color="blue">mdi-chevron-double-right</v-icon>
          <select name="os0">
            <option value="500ml">500ml $12.99 CAD</option>
            <option value="32oz">32oz $19.99 CAD</option>
          </select>
        </td>
      </tr>
    </table>
    <input type="hidden" name="currency_code" value="CAD" />
    <input
      type="image"
      src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
      border="0"
      name="submit"
      alt="PayPal - The safer, easier way to pay online!"
    />
    <img
      alt
      border="0"
      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
      width="1"
      height="1"
    />
  </form>
</template>

<script>
export default {
  name: "btnSingleBottles"
};
</script>

<style>
.selectsize {
  font-weight: bold;
}
</style>