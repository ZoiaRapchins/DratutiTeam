package main

import (
	"time"
	"fmt"
	"math/rand"
)
// predefine rush hour
// 8 / 13 / 6
// 10 / 21

func main() {
	// create database file
	fmt.Println("Start to create")

	dbAccessor := new(DatabaseAccessor)
	dbAccessor.OpenDB("historyDatabase")
	dbAccessor.CreateDatabaseHistory()
	dbAccessor.CreateDatabaseEnv()
	rand.Seed(time.Now().Unix())
	dayCounter := 7
	for j:= 1; j <= 365; j++ {
		if dayCounter > 7 {
			dayCounter = 0
		}
		for k:= 1; k <= 24; k++ {
			isRush := false
			isGoodWeather := true
			isFallout := false
			isWeekend := false

			bottomLoadBound := 20
			topLoadBound := 30

			if rand.Intn(10) == 1 {
				isFallout = true
			}
			if rand.Intn(3) == 1 {
				isGoodWeather = false
			}
			eventType := 0
			if dayCounter > 5 {
				if k < 5 || k > 22 {
					bottomLoadBound = 5
					topLoadBound = 10
				} else {
					if k == 8 || k == 13 || k == 18 {
						isRush = true
						bottomLoadBound = 50
						topLoadBound = 60
					}
				}
			} else {
				isWeekend = true
				if k < 5 || k > 22 {
					bottomLoadBound = 3
					topLoadBound = 5
				} else {
					if k == 10 || k == 21 {
						bottomLoadBound = 35
						topLoadBound = 45
					}
				}
			}

			envRow := new(EnvData)
			envRow.monthday = j
			envRow.weekday = dayCounter
			envRow.Hour = k
			envRow.IsRush = isRush
			envRow.IsWeekend = isWeekend
			envRow.IsGoodWeather = isGoodWeather
			envRow.IsFallout = isFallout

			if rand.Intn(5) == 1 {
				eventType = rand.Intn(3)
				rise := 0
				switch eventType {
				case 1:
					rise = 10
					break
				case 2:
					rise = 20
					break
				case 3:
					rise = 30
					break
				}
				envRow.EventID = eventType
				bottomLoadBound = bottomLoadBound + rise
				topLoadBound = topLoadBound + rise
			}

			if !isGoodWeather {
				bottomLoadBound = bottomLoadBound + 25
				topLoadBound = topLoadBound + 25
			}

			if isFallout {
				bottomLoadBound = bottomLoadBound + 25
				topLoadBound = topLoadBound + 25
			}

			if rand.Intn(10) == 1 {
				envRow.DoesPolicyApply = true
				bottomLoadBound = bottomLoadBound * 2
				topLoadBound = topLoadBound * 2
			}

			if rand.Intn(7) == 1 {
				envRow.IsPriceHigher = true
				bottomLoadBound = bottomLoadBound * 2
				topLoadBound = topLoadBound * 2
			}

			dbAccessor.AddRowToEnv(*envRow)
			randomHistorySize := rand.Intn(topLoadBound - bottomLoadBound) + bottomLoadBound

			hasPeakAtCenter := (rand.Intn(5) == 1)

			for demand := 0; demand <= randomHistorySize; demand++ {
				row := new(HistoryDataRow)
				row.Time = GenerateRandomTime(j, k)
				if hasPeakAtCenter && demand < int(0.6*float64(randomHistorySize)){
					row.LonCurrent, row.LatCurrent = GeneratePeekInCenter()
				} else {
					row.LonCurrent, row.LatCurrent = GenerateRandomCoord()
				}
				if rand.Intn(2) == 1 {
					row.Booked = true
					if rand.Intn(2) == 1 {
						row.LonDestination, row.LatDestination = GenerateRandomCoord()
					}
				} else {
					row.Booked = false
				}
				dbAccessor.AddRowToHistory(*row)
			}
		}
		dayCounter = dayCounter + 1
	}
	dbAccessor.Shutdown()
}

func GenerateRandomTime(day int, hour int) time.Time {
	randomMin := rand.Intn(60 - 1) + 1
	randomSec := rand.Intn(60 - 1) + 1
	genTime := time.Date(2017, time.October,
		day, hour,
		randomMin, randomSec,
		0, time.UTC)
	return genTime
}

func GeneratePeekInCenter() (float64, float64) {
	randomLon := rand.Intn(40758597 - 40750470) + 40750470
	randomLat := rand.Intn((-73981494) - (-73987245)) + (-73987245)
	return float64(randomLon)/1000000, float64(randomLat)/1000000
}


func GenerateRandomCoord() (float64, float64) {
	randomLon := rand.Intn(40810000 - 40741549) + 40741549
	randomLat := rand.Intn((-73932326) - (-74006140)) + (-74006140)
	return float64(randomLon)/1000000, float64(randomLat)/1000000
}
