---
title: Bitcoin Transaction Privacy 
date: 2020-12-29
excerpt: A guide to making your bitcoin transactions private
tags: ["Bitcoin", "Privacy", "CoinJoin"]
---

# Private Transactions 

The idea behind a private transaction in the Bitcoin world is often over
looked, with most stating the core Bitcoin principles such as your wallet hash
being a measure against censorship. 

This works to a certain extent, you are able to send and receive without the
need of verifying your identity as the Bitcoin protocol is based on
trustless cryptographic procedure. Though with taint analysis, transaction
tracking technology, IP address monitoring nodes, web-spidering and many other
mechanisms, your privacy may be difficult to maintain.

This post aims to look into the concept of CoinJoin, a method of combining
multiple Bitcoin payments from multiple spends in a single transaction. Making
all the previous methods of breaking privacy harder.

## What is CoinJoin?

> CoinJoin is a trustless method for combining multiple Bitcoin payments from
multiple spenders into a single transaction to make it more difficult for
outside parties to determine which spender paid which recipient or recipients.
Unlike many other privacy solutions, coinjoin transactions do not require
a modification to the bitcoin protocol.

[CoinJoin wiki](https://en.bitcoin.it/wiki/CoinJoin)

[Investopedia](https://www.investopedia.com/terms/c/coinjoin.asp) describes the
CoinJoin strategy as a first generation privacy hack for Bitcoin, this is
interesting as prior to this there were not methods of enabling privacy on the
blockchain. 

Another interesting aspect to this article is the mention of Monero (XMR),
Monero uses a similar method to enable privacy, by mixing users signature with
other users breaking privacy is nearly impossible.

## Tools for CoinJoin

Several tools were made to automate this strategy, DarkWallet, JoinMarket, and
SharedCoins were one of the original automated methods for coin mixing
(CoinJoin).

Currently wallets that do this at a acceptable level is Samourai Wallet's
Whirlpool and Wasabi Wallet. 

# Sources

[Original Post by gmaxwell on Bitcon Forums](https://bitcointalk.org/index.php?topic=279249.msg2983902#msg2983902)
[I Taint rich! by gmaxwell](https://bitcointalk.org/index.php?topic=139581.0)
[Samourai Wallet Whirlpool](https://samouraiwallet.com/whirlpool)


