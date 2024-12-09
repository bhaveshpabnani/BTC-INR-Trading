# Cryptocurrency Price Prediction Using Deep Learning

Author - Bhavesh Nareshkumar Pabnani

## Overview
In this project, we aim to predict the future close prices of Bitcoin (BTC) against the Indian Rupee (INR) using deep learning techniques. Leveraging historical minute-wise candlestick data from the Pi42 cryptocurrency exchange API, we explore various models, including LSTM, N-BEATS, and Seq2Seq with Attention mechanisms, to forecast the next time step close price based on previous time steps.

## Problem Statement
The rapid fluctuations in cryptocurrency prices pose significant challenges for traders and investors. Accurate price forecasting can aid in making informed decisions and optimizing trading strategies. This project focuses on:

- **Data Acquisition**: Scraping historical price data and technical indicators.
- **Feature Engineering**: Creating relevant features that enhance model performance.
- **Modeling**: Implementing various deep learning architectures to predict future prices.
- **Evaluation**: Comparing model performances to identify the most effective forecasting approach.

## Models Implemented
I have implemented **13 predictive models** to tackle the problem, including:

1. **Linear Regression (LR)**
2. **Random Forest Regressor (RF)**
3. **XGBoost (XGB)**
4. **AutoRegressive Integrated Moving Average (ARIMA)**
5. **Long Short-Term Memory (LSTM)**
6. **LSTM with Attention**
7. **CNN + LSTM**
8. **Bidirectional LSTM (BiLSTM)**
9. **Transformer**
10. **Facebook Prophet**
11. **N-BEATS**
12. **Seq2Seq with Attention**
13. **Time Series Forecasting Transformer (TFT)**

## Feature Engineering
To enhance model performance, I engineered several features from the historical data, including:

### Technical Indicators
1. **Relative Strength Index (RSI)**: Measures the speed and change of price movements.
2. **Simple Moving Average (SMA)**: Averages the closing prices over a specified period.
3. **Exponential Moving Average (EMA)**: A type of moving average that gives more weight to recent prices.
4. **Moving Average Convergence Divergence (MACD)**: A trend-following momentum indicator that shows the relationship between two moving averages.
5. **Bollinger Bands**: Consists of a middle band (SMA) and two outer bands that are standard deviations away from the middle band.
6. **Average True Range (ATR)**: Measures market volatility by decomposing the entire range of an asset price for that period.
7. **Stochastic Oscillator**: A momentum indicator comparing a particular closing price of a security to a range of its prices over a certain period.
8. **Volume Weighted Average Price (VWAP)**: The average price a security has traded at throughout the day, based on both volume and price.
9. **Commodity Channel Index (CCI)**: Measures the deviation of the price from its average price over a specific period.
10. **Rate of Change (ROC)**: Measures the speed at which the price changes over a specified period.

### Additional Engineered Features
- **Return Calculations**: Calculated returns based on closing prices to assess profitability.
- **Rolling Volatility**: A measure of how much the price of an asset fluctuates over a specified time frame.
- **Previous Volume**: The trading volume from the previous time period to understand market activity.
- **Lagged Close Prices**: Close prices from previous time steps to help models learn temporal dependencies.
- **Time Features**: Such as hour, day of the week, and whether it is a weekend, to capture potential cyclical patterns.

These features provide valuable insights into market trends and patterns, enabling the models to make more informed predictions.

## Dataset
The dataset used for this analysis was obtained from the Pi42 cryptocurrency exchange API, which provided historical candlestick data at minute intervals. The data includes open, high, low, and close (OHLC) prices, trading volume, and additional technical indicators calculated during the feature engineering phase. 

While the primary analysis was conducted using historical data retrieved from the Kline API, I also implemented a script for real-time data scraping via WebSocket. However, this approach proved to be resource-intensive and was primarily suitable for dynamic applications. The WebSocket script has been included in the project submission for reference.

## Challenges Encountered
- **WebSocket Implementation**: Attempted to implement a WebSocket script for real-time data collection; however, it required extensive resources and time, proving inefficient for static data modeling. The focus remained on Kline API data for model training.
- **Resource Management**: Balancing data acquisition with computational efficiency was crucial during the modeling phase.

## Conclusion
This notebook presents a comprehensive approach to cryptocurrency price prediction using advanced deep learning techniques. The findings provide insights into effective modeling strategies that can be utilized for real-time financial forecasting.

---
