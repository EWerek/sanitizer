<template>
  <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="47ASHS3P9X766" />
    <table>
      <!-- <tr>
        <td>
          <input type="hidden" name="on0" value="Four Gallons Case" />Four Gallons Case
        </td>
      </tr>-->
      <tr>
        <td>
          <select name="os0">
            <option value="4 one gallon bottles">4 one gallon bottles $325.00 CAD</option>
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
  name: "btnCase"
};
</script>

<style>
</style>