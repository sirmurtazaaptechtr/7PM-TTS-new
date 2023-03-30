<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
  <h2>Today's BreakFast Menu</h2>
    <table border="1">
      <thead>
        <tr bgcolor="#9acd32">
          <th>Name</th>
          <th>Calaories</th>
          <th>Description</th>
          <th>Price</th>        
        </tr>
      </thead>
      <tbody>
      <xsl:for-each select="breakfast_menu/food">
        <tr>
          <td><xsl:value-of select="name"/></td>
          <td><xsl:value-of select="calories"/></td>
          <td><xsl:value-of select="description"/></td>
          <td><xsl:value-of select="price"/></td>        
        </tr>
      </xsl:for-each>
      </tbody>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>