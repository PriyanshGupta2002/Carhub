import CarCard from '@/components/CarCard'
import ShowMore from '@/components/ShowMore'
import {Hero,CustomFilter,SearchBar} from '@/components/index'
import { SearchProps } from '@/types'
import { fuels, yearsOfProduction } from '@/utils/constants'
import { getCars } from '@/utils/fetchData'




export default async function Home({searchParams}:{searchParams:SearchProps}) {
  const allCars = await getCars({
    model:searchParams.model || '',
    make:searchParams.make?.includes("+")?searchParams.make.replace("+"," "):searchParams.make || '',
    year:searchParams.year || 2022,
    fuel:searchParams.fuel || '',
    limit:searchParams.limit || 10
  })
  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars

  return (
    <main className="overflow-hidden ">
        <Hero/>
        <div className='mt-12 padding-x padding-y max-width' id='discover'>
            <div className='home__text-container'>
                <h1 className='text-4xl font-extrabold'>
                  Car Catalogue
                </h1>
                <p>
                  Explore the cars you might like
                </p>
            </div>

            <div className='home__filters'>
                <SearchBar/>
                <div className='home__filter-container'>
                  <CustomFilter title="fuel" options={fuels}/>
                  <CustomFilter title="year" options={yearsOfProduction}/>
                </div>
            </div>

          {!isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {allCars.map((car,idx)=>(
                  <CarCard car={car} key={idx}/>
                ))}
              </div>
              <ShowMore
              pageNumber={(searchParams.limit || 10)/10}
              isNext={(searchParams.limit || 10) > allCars.length}

              />
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}

        </div>

    </main>
  )
}
