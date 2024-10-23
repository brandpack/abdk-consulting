export default async function handler(req, res) {
  const { crypto } = req.query;

  if (!crypto) {
    return res.status(400).json({ error: "Crypto symbol is required" });
  }

  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${crypto}`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.CMC_KEY,
      },
    });
    
    const data = await response.json();
    // console.log(data);  // Отладочный вывод для проверки

    if (data && data.data && data.data[crypto]) {
      const marketCap = data.data[crypto].quote.USD.market_cap;
      return res.status(200).json({ market_cap: marketCap });
    } else {
      return res.status(404).json({ error: 'Data not found for the given cryptocurrency' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
}