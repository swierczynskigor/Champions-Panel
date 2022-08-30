import React, { useState, useEffect } from 'react'

import './RunesList.css'
import Miniature from '../Miniature';
import listReactFiles from 'list-react-files'
import images from '../../../../public/images'

const DUMMY_RUNES = {
      Domination: {
            1: ['DarkHarvest', 'Electrocute', 'HailOfBlades', 'Predator'],
            2: ['CheapShot', 'TasteOfBlood', 'SuddenImpact'],
            3: ['ZombieWard', 'GhostPoro', 'EyeballCollection'],
            4: ['IngeniousHunter', 'RelentressHunter', 'TreasureHunter', 'UltimateHunter'],
      },
      Inspiration: {
            1: ['GlacialAugment', 'FirstStrike', 'UnsealedSpellbook'],
            2: ['HextechFlashtraption', 'MagicalFootwear', 'PerfectTiming'],
            3: ['BiscuitDelivery', 'FutureMarket', 'MinionDematerializer'],
            4: ['CosmicInsight', 'ApproachVelocity', 'TimeWrapTonic'],
      },
      Precision: {
            1: ['PressTheAttack', 'FleetFootwork', 'LethalTempo', 'Conqueror'],
            2: ['Triumph', 'Overheal', 'PresenceOfMind'],
            3: ['LegendAlacrity', 'LegendBloodline', 'LegendTenacity'],
            4: ['CoupDeGrace', 'CutDown', 'LastStand'],
      },
      Resolve: {
            1: ['GraspOfTheUndying', 'Guardian', 'VeteranAftershock'],
            2: ['Demolish', 'FontOfLife', 'MirrorShell'],
            3: ['Conditioning', 'SecondWind', 'BonePlating'],
            4: ['Overgrowth', 'Revitalize', 'Unfinching'],
      },
      Sorcery: {
            1: ['ArcaneComet', 'SummonAery', 'PhaseRush'],
            2: ['Pokeshield', 'ManaflowBand', 'NimbusCloak'],
            3: ['AbsoluteFocus', 'CelerityTemp', 'Transcendence'],
            4: ['GatheringStorm', 'Scorch', 'Waterwalking'],
      },
}

export default function RuneList(props) {
      const [runes, setRunes] = useState([]);
      const [loading, setLoading] = useState(true);

      console.log(images)


      useEffect(() => {
            const getRunes = async () => {
                  setRunes(listReactFiles('./images/runes/' + props.category + '/' + props.idx).then(files => console.log(files)))
                  setLoading(false)
            }

            // getRunes()
            // console.log(runes)
      }, []);

      const handlePick = (pickedItem) => {
            props.close()
            props.pick(pickedItem)
      }


      if (!loading) {
            const itemList = runes.map(el => {
                  return <Miniature key={el.image.slice(0, 4)} image={el.image} name={el.name} type={'runes'} click={handlePick} />
            })

            return (
                  <div className='list-container'>
                        <div className='items'>
                              <div className='button-container'>
                                    <button onClick={props.close}>Close</button>
                              </div>
                              {itemList}
                        </div>
                  </div>
            )
      }
      else
            return (
                  <div className='list-container'>
                        <div className='items'>
                              <div className='button-container'>
                                    <button onClick={props.close}>Close</button>
                              </div>
                              Loading...
                        </div>
                  </div>
            )
}
