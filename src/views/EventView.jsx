import { useState } from 'react'
import { useConfig } from '../context/ConfigContext'
import { convertDriveUrl } from '../lib/sheets'

const formatEventDate = (dateStr) => {
  const s = String(dateStr).replace(/\D/g, '')
  if (s.length === 8) {
    const y = s.slice(0, 4)
    const m = parseInt(s.slice(4, 6), 10)
    const d = parseInt(s.slice(6, 8), 10)
    return `${y}年${m}月${d}日`
  }
  return dateStr
}

const SetlistBlock = ({ text }) => {
  if (!text) return null
  return (
    <div className="text-sm text-content-text whitespace-pre-line leading-relaxed">
      {text}
    </div>
  )
}

const PastEventCard = ({ event }) => {
  const [open, setOpen] = useState(false)
  const imgSrc = event.imageUrl ? convertDriveUrl(event.imageUrl, 600) : null

  return (
    <div className="glass-effect rounded-xl border border-card-border/30 overflow-hidden">
      <div className="flex gap-4 p-4">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={event.title}
            className="w-28 h-28 object-cover rounded-lg shrink-0"
            loading="lazy"
          />
        )}
        <div className="flex-1 min-w-0">
          {event.date && (
            <div className="text-xs text-gray-500 mb-1">{formatEventDate(event.date)}</div>
          )}
          <h3 className="text-base font-body text-white mb-2 leading-snug">{event.title}</h3>
          {event.notes && (
            <p className="text-xs text-gray-400 mb-2">{event.notes}</p>
          )}
          {event.setlist && (
            <>
              <button
                type="button"
                onClick={() => setOpen(v => !v)}
                className="text-xs text-light-blue hover:text-white transition-colors"
              >
                {open ? 'セットリストを閉じる ▲' : 'セットリストを見る ▼'}
              </button>
              {open && (
                <div className="mt-2 pl-3 border-l border-light-blue/30">
                  <SetlistBlock text={event.setlist} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const EventView = ({ events }) => {
  const config = useConfig()
  const viewConfig = config.views.find(v => v.id === 'events')
  const title = viewConfig?.title || 'イベント'
  const { upcoming, past } = events || { upcoming: null, past: [] }

  return (
    <>
      {/* NEXT EVENT */}
      {upcoming && (
        <section>
          <h2 className="text-2xl md:text-4xl font-body mb-6 text-glow-soft text-primary">
            Next Event
          </h2>
          <div className="glass-effect rounded-2xl border border-amber/40 overflow-hidden">
            {upcoming.imageUrl && (
              <img
                src={convertDriveUrl(upcoming.imageUrl, 1200)}
                alt={upcoming.title}
                className="w-full object-cover"
              />
            )}
            <div className="p-6 md:p-8">
              {upcoming.date && (
                <div className="text-amber text-sm font-body mb-2">
                  {formatEventDate(upcoming.date)}
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-body text-white mb-4">
                {upcoming.title}
              </h3>
              {upcoming.setlist && (
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">セットリスト</div>
                  <SetlistBlock text={upcoming.setlist} />
                </div>
              )}
              {upcoming.notes && (
                <p className="text-sm text-gray-400 mt-4 pt-4 border-t border-card-border/20">
                  {upcoming.notes}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 開催済みイベント */}
      {past.length > 0 && (
        <section>
          <h2 className="text-2xl md:text-4xl font-body mb-6 text-glow-soft text-primary">
            {title} 履歴
          </h2>
          <div className="space-y-3">
            {past.map((event, i) => (
              <PastEventCard key={`${event.date}-${i}`} event={event} />
            ))}
          </div>
        </section>
      )}

      {!upcoming && past.length === 0 && (
        <section className="text-center py-16">
          <div className="text-4xl mb-4">📖</div>
          <p className="text-gray-400">イベントデータがありません</p>
        </section>
      )}
    </>
  )
}

export default EventView
