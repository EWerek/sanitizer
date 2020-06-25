<template>
  <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="8L3UHCH8DFVKU" />
    <table class="mx-auto">
      <tr>
        <td>
          <input type="hidden" name="on0" value="Sizes" />Sizes
        </td>
      </tr>
      <tr>
        <td>
          <v-icon color="blue">mdi-chevron-double-right</v-icon>
          <select name="os0">
            <option value="Individual">Individual $19.99 CAD</option>
            <option value="6 pack">6 pack $107.95 CAD</option>
            <option value="12 pack">12 pack $203.89 CAD</option>
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
  name: "btnSingleBottle"
};
</script>
<style>
.selectsize {
  font-weight: bold;
}
</style>