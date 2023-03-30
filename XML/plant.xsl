<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>My Plants</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
            </head>
            <body>
                <h1 class="display-1">My Plants</h1>
                <table class="table table-hover table-success">
                    <thead>
                        <tr>
                            <th>COMMON NAME</th>
                            <th>BOTANICAL NAME</th>
                            <th>ZONE</th>
                            <th>LIGHT</th>
                            <th>PRICE</th>
                            <th>AVAILABILITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="CATALOG/PLANT">
                            <tr>
                                <td><xsl:value-of select="COMMON" /></td>
                                <td><xsl:value-of select="BOTANICAL" /></td>
                                <td><xsl:value-of select="ZONE" /></td>
                                <td><xsl:value-of select="LIGHT" /></td>
                                <td><xsl:value-of select="PRICE" /></td>
                                <td><xsl:value-of select="AVAILABILITY" /></td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>