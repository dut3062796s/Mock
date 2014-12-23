/* global define */
/*
    #### Text
*/
define(['./basic', './helper'], function(Basic, Helper) {
    return {
        /*
            ##### Random.paragraph(len)

            随机生成一段文本。

            * Random.paragraph()
            * Random.paragraph(len)
            * Random.paragraph(min, max)

            参数的含义和默认值如下所示：

            * 参数 len：可选。指示文本中句子的个数。默认值为 3 到 7 之间的随机数。
            * 参数 min：可选。指示文本中句子的最小个数。默认值为 3。
            * 参数 max：可选。指示文本中句子的最大个数。默认值为 7。

            使用示例如下所示：

                Random.paragraph()
                // => "Yohbjjz psxwibxd jijiccj kvemj eidnus disnrst rcconm bcjrof tpzhdo ncxc yjws jnmdmty. Dkmiwza ibudbufrnh ndmcpz tomdyh oqoonsn jhoy rueieihtt vsrjpudcm sotfqsfyv mjeat shnqmslfo oirnzu cru qmpt ggvgxwv jbu kjde. Kzegfq kigj dtzdd ngtytgm comwwoox fgtee ywdrnbam utu nyvlyiv tubouw lezpkmyq fkoa jlygdgf pgv gyerges wbykcxhwe bcpmt beqtkq. Mfxcqyh vhvpovktvl hrmsgfxnt jmnhyndk qohnlmgc sicmlnsq nwku dxtbmwrta omikpmajv qda qrn cwoyfaykxa xqnbv bwbnyov hbrskzt. Pdfqwzpb hypvtknt bovxx noramu xhzam kfb ympmebhqxw gbtaszonqo zmsdgcku mjkjc widrymjzj nytudruhfr uudsitbst cgmwewxpi bye. Eyseox wyef ikdnws weoyof dqecfwokkv svyjdyulk glusauosnu achmrakky kdcfp kujrqcq xojqbxrp mpfv vmw tahxtnw fhe lcitj."
                Random.paragraph(2)
                // => "Dlpec hnwvovvnq slfehkf zimy qpxqgy vwrbi mok wozddpol umkek nffjcmk gnqhhvm ztqkvjm kvukg dqubvqn xqbmoda. Vdkceijr fhhyemx hgkruvxuvr kuez wmkfv lusfksuj oewvvf cyw tfpo jswpseupm ypybap kwbofwg uuwn rvoxti ydpeeerf."
                Random.paragraph(1, 3)
                // => "Qdgfqm puhxle twi lbeqjqfi bcxeeecu pqeqr srsx tjlnew oqtqx zhxhkvq pnjns eblxhzzta hifj csvndh ylechtyu."
        */
        paragraph: function(min, max) {
            var len;
            if (arguments.length === 0) len = Basic.natural(3, 7)
            if (arguments.length === 1) len = max = min
            if (arguments.length === 2) {
                min = parseInt(min, 10)
                max = parseInt(max, 10)
                len = Basic.natural(min, max)
            }

            var arr = []
            for (var i = 0; i < len; i++) {
                arr.push(this.sentence())
            }
            return arr.join(' ')
        },
        /*
            ##### Random.sentence(len)

            随机生成一个句子，第一个的单词的首字母大写。

            * Random.sentence()
            * Random.sentence(len)
            * Random.sentence(min, max)

            参数的含义和默认值如下所示：

            * 参数 len：可选。指示句子中单词的个数。默认值为 12 到 18 之间的随机数。
            * 参数 min：可选。指示句子中单词的最小个数。默认值为 12。
            * 参数 max：可选。指示句子中单词的最大个数。默认值为 18。

            使用示例如下所示：

                Random.sentence()
                // => "Jovasojt qopupwh plciewh dryir zsqsvlkga yeam."
                Random.sentence(5)
                // => "Fwlymyyw htccsrgdk rgemfpyt cffydvvpc ycgvno."
                Random.sentence(3, 5)
                // => "Mgl qhrprwkhb etvwfbixm jbqmg."
        */
        sentence: function(min, max) {
            var len;
            if (arguments.length === 0) len = Basic.natural(12, 18)
            if (arguments.length === 1) len = max = min
            if (arguments.length === 2) {
                min = parseInt(min, 10)
                max = parseInt(max, 10)
                len = Basic.natural(min, max)
            }

            var arr = []
            for (var i = 0; i < len; i++) {
                arr.push(this.word())
            }
            return Helper.capitalize(arr.join(' ')) + '.'
        },
        /*
            ##### Random.word(len)

            随机生成一个单词。

            * Random.word()
            * Random.word(len)
            * Random.word(min, max)

            参数的含义和默认值如下所示：

            * 参数 len：可选。指示单词中字符的个数。默认值为 3 到 10 之间的随机数。
            * 参数 min：可选。指示单词中字符的最小个数。默认值为 3。
            * 参数 max：可选。指示单词中字符的最大个数。默认值为 10。

            使用示例如下所示：

                Random.word()
                // => "fxpocl"
                Random.word(5)
                // => "xfqjb"
                Random.word(3, 5)
                // => "kemh"

            > 目前，单字中字符是随机的小写字母，未来会根据词法生成“可读”的单词。
        */
        word: function(min, max) {
            var len;
            if (arguments.length === 0) len = Basic.natural(3, 10)
            if (arguments.length === 1) len = max = min
            if (arguments.length === 2) {
                min = parseInt(min, 10)
                max = parseInt(max, 10)
                len = Basic.natural(min, max)
            }

            var result = '';
            for (var i = 0; i < len; i++) {
                result += Basic.character('lower')
            }

            return result
        },
        /*
            ##### Random.title(len)

            随机生成一句标题，其中每个单词的首字母大写。

            * Random.title()
            * Random.title(len)
            * Random.title(min, max)

            参数的含义和默认值如下所示：

            * 参数 len：可选。指示单词中字符的个数。默认值为 3 到 7 之间的随机数。
            * 参数 min：可选。指示单词中字符的最小个数。默认值为 3。
            * 参数 max：可选。指示单词中字符的最大个数。默认值为 7。

            使用示例如下所示：

                Random.title()
                // => "Rduqzr Muwlmmlg Siekwvo Ktn Nkl Orn"
                Random.title(5)
                // => "Ahknzf Btpehy Xmpc Gonehbnsm Mecfec"
                Random.title(3, 5)
                // => "Hvjexiondr Pyickubll Owlorjvzys Xfnfwbfk"
        */
        title: function(min, max) {
            var len,
                result = [];

            if (arguments.length === 0) len = Basic.natural(3, 7)
            if (arguments.length === 1) len = max = min
            if (arguments.length === 2) {
                min = parseInt(min, 10)
                max = parseInt(max, 10)
                len = Basic.natural(min, max)
            }

            for (var i = 0; i < len; i++) {
                result.push(this.capitalize(this.word()))
            }
            return result.join(' ')
        }
    }
})