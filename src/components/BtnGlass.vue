<template>
  <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="ZRN2FYPUPNRAJ" />
    <table>
      <tr>
        <td>
          <input type="hidden" name="on0" value="Plexi-Glass (30x30 in)" />Plexi-Glass (30x30 in)
        </td>
      </tr>
      <tr>
        <td>
          <select name="os0">
            <option value="Cut and Installed">Cut and Installed $300.00 CAD</option>
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
  name: "btnStand"
};
</script>

<style>
</style>